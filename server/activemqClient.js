import { Client } from '@stomp/stompjs';
import { WebSocket } from 'ws';

Object.assign(global, { WebSocket });

const activemqClient = new Client({
  brokerURL: 'ws://127.0.0.1:61614',
  onConnect: () => {
    console.log("Producer connected");
    activemqClient.subscribe(`/queue/messagesForBackend`, (message) => {
      const req = JSON.parse(message.body);
      activemqClient.publish({
        destination: `/topic/messages-${req.roomId}`, body: JSON.stringify({
          userId: req.userId,
          name: req.name,
          message: req.message,
        })
      })
    });
  }
});


export default activemqClient;