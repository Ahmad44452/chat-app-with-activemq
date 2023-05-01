import express from 'express';
let router = express.Router();
import activemqClient from './activemqClient.js';

router.route('/sendmessage').post(async (req, res) => {
  try {

    await activemqClient.publish({
      destination: `/topic/messages-${req.body.roomId}`, body: JSON.stringify({
        userId: req.body.userId,
        name: req.body.name,
        message: req.body.message,
      })
    })

    return res.status(200).json("Message sent");
  } catch (error) {
    console.log(error)
  }
});



export default router;