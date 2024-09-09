const { Server } = require("socket.io");
const { handleSocketConnection } = require("./controllers/chatController");

const setupSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: 'https://chat-application-jh8r.vercel.app',
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true, 
    }
  });

  io.on("connection", (socket) => {
    console.log("A user connected");

    handleSocketConnection(io, socket);

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};

module.exports = { setupSocket };
