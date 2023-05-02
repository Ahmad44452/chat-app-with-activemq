import { useEffect, useState, useRef } from "react";
import activemqClient from "./ActiveMQ/client";
import axios from "axios";

interface ChatScreenPropsInterface {
  roomId: String;
  name: String;
  userId: String;
}

interface ReceviedMessageInterface {
  userId: String;
  name: String;
  message: String;
}

const ChatScreen = ({ roomId, name, userId }: ChatScreenPropsInterface) => {
  const [messages, setMessages] = useState<ReceviedMessageInterface[]>([]);
  const userMessageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (activemqClient.active === false) {
      activemqClient.onConnect = () => {
        activemqClient.subscribe(`/topic/messages-${roomId}`, (message) => {
          setMessages((prev) => [...prev, JSON.parse(message.body)]);
        });
      };
    }
    activemqClient.activate();

    return () => {
      activemqClient.deactivate();
    };
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      userMessageRef.current !== null &&
      userMessageRef.current?.value !== ""
    ) {
      await activemqClient.publish({
        destination: `/queue/messagesToSend`,
        body: JSON.stringify({
          roomId: roomId,
          userId: userId,
          name: name,
          message: userMessageRef.current.value,
        }),
      });
      // await axios.post("http://localhost:3001/api/sendmessage", {
      //   roomId: roomId,
      //   userId: userId,
      //   name: name,
      //   message: userMessageRef.current.value,
      // });

      userMessageRef.current.value = "";
    }
  };

  return (
    <div className="chat">
      <div className="chat__info">
        <h2>Userid: {userId}</h2>
        <h2>Name: {name}</h2>
        <h2>Connected to room: {roomId}</h2>
      </div>

      <div className="chat__container">
        {messages.map((item, index) => {
          return (
            <div className="chat__message" key={index}>
              <p className="chat__message--author">
                {item.userId === userId ? "You: " : `${item.name}:`}
              </p>
              <p className="chat__message--content">{item.message}</p>
            </div>
          );
        })}
      </div>

      <div>
        <form onSubmit={handleSubmit} className="chat__input">
          <input
            className="chat__input--text"
            placeholder="Enter Message"
            ref={userMessageRef}
          />
          <input className="chat__input--send" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
