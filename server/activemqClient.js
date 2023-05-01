import { Client } from '@stomp/stompjs';
import { WebSocket } from 'ws';

Object.assign(global, { WebSocket });

const activemqClient = new Client({
  brokerURL: 'ws://127.0.0.1:61614',
  onConnect: () => {
    console.log("Producer connected");
  }
});


export default activemqClient;