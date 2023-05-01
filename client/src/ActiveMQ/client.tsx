import { Client } from "@stomp/stompjs";

const activemqClient = new Client({
  brokerURL: "ws://127.0.0.1:61614",
  // onConnect: () => {
  //   console.log("Consumer connected");
  //   // client.subscribe("/queue/message", (message) => {
  //   //   console.log(message.body);
  //   // });
  // },
});

export default activemqClient;

// client.activate();
