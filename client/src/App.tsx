import { useState } from "react";
import SelectRoom from "./SelectRoom";
import ChatScreen from "./ChatScreen";
import { v4 as uuid } from "uuid";

const App = () => {
  const userId = uuid();

  const [roomId, setRoomId] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      {roomId === "" || name === "" ? (
        <SelectRoom setRoomId={setRoomId} setName={setName} />
      ) : (
        <ChatScreen userId={userId} roomId={roomId} name={name} />
      )}
    </>
  );
};

export default App;
