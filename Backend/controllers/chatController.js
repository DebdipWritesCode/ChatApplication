const Message = require("../models/messageModel");

const handleSocketConnection = (io, socket) => {
  socket.on("chat message", async ({ msg, sender }) => {
    try {
      const newMessage = new Message({
        content: msg,
        sender,
      });
      await newMessage.save();

      io.emit("chat message", { content: msg, sender }); 
    } catch (err) {
      console.error(err);
    }
  });
};

module.exports = { handleSocketConnection };
