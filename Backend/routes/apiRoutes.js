const express = require('express');
const Message = require('../models/messageModel');
const router = express.Router();

router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

module.exports = router;
