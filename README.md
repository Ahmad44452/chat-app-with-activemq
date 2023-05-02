**<h1 align="center">Chat App With ActiveMQ and React</h1>**

<p>This is a real-time chat application that uses ActiveMQ and React to enable users to chat in real-time. The application is built using TypeScript and uses ActiveMQ as the messaging broker to enable real-time messaging between clients.</p>

<br>

## **DEMO**


https://user-images.githubusercontent.com/88369569/235585442-fea1c725-c022-4170-8cd8-b6208d450021.mp4


<br>

## **FEATURES**

- Real-time messaging
- Ability to create or join a chat room
- Simple and easy-to-use UI

<br>

## **TECHNOLOGIES**

<div align="center">
<p align="center">

<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white" alt="" />
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white" alt="tsx" />
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style=for-the-badge&logo=SVG&logoColor=black" alt="sample" />
<img src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white" alt="pack" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="@types/react" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="eslint-plugin-react-hooks" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white" alt="vite" />

</p>
</div>

<br>

## **SETUP**

1. Start ActiveMQ broker

   <code>
   cd activemqDirectory\bin

   activemq start
   </code>

2. Clone the repository

   `git clone https://github.com/Ahmad44452/chat-app-with-activemq.git`

3. Install dependencies

   <code>
    cd chat-app-with-activemq
    
    npm run npm-install-scripts
    </code>

4. Edit `server/activemqClient.js` and `client/src/ActiveMQ/client.tsx` to set the broker URL as needed.

5. Start node server

   `npm run server`

6. Start client

   `npm run client`

7. Access the client in a browser
