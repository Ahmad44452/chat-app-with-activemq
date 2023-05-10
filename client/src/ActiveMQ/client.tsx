import { Client } from "@stomp/stompjs";

const activemqClient = new Client({
  brokerURL: "ws://127.0.0.1:61614",
});

export default activemqClient;
