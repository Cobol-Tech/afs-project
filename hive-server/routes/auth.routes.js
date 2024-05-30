import { Router } from "express";
import { signUp, signIn } from "../controllers/auth.js";
import Message from "../models/message.js";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

// Message
router.post("/msg", async (req, res) => {
  try {
    const { from, to, message } = req.body;

    const newMessage = await Message.create({
      message: message,
      ChatUsers: [from, to],
      Sender: from,
    });

    return res.status(200).json({ newMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Server error. ${error}` });
  }
});

router.get("/get/chat/msg/:user1Id/:user2Id", async (req, res) => {
  try {
    const from = req.params.user1Id;
    const to = req.params.user2Id;

    const newMessage = await Message.find({
      ChatUsers: {
        $all: [from, to],
      },
    }).sort({ updatedAt: -1 });

    const allMessages = newMessage.map((msg) => {
      return {
        myself: msg.Sender.toString() === from,
        message: msg.message,
      };
    });

    return res.status(200).json({ allMessages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Server error. ${error}` });
  }
});

export default router;
