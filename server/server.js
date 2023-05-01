import express from "express";
const app = express();
import cors from 'cors';
import api from './api.js';
import activemqClient from "./activemqClient.js";




//////////// APPLY MIDDLEWARES
var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", api);

app.get('/', (req, res) => {
  return res.send(`
  <html style='background-color: #000;color: #fff;'>
  <head></head>
  <body>
    <h1>Server working</h1>
  </body>
  </html>
  `)
});


app.listen(3001, () => {
  console.log("Server is running!");
  activemqClient.activate();
});