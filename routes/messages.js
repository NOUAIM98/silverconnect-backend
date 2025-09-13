const express = require("express");
const Message = require("../models/Message");
const router = express.Router();

router.get("/", async (req, res) => {
  const msgs = await Message.find().sort({ timestamp: 1 });
  res.json(msgs);
});

router.post("/", async (req, res) => {
  const { username, content } = req.body;
  const msg = new Message({ username, content });
  await msg.save();
  res.json(msg);
});

module.exports = router;
