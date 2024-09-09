const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require("socket.io");
const connectDB = require('../config');
const apiRoutes = require('../routes/apiRoutes');
const { handleSocketConnection } = require("../controllers/chatController");

const app = express();
const server = http.createServer(app);

// Middlewares
app.use(cors());

// API Routes
app.use('/api', apiRoutes);

// Database Connection
connectDB();

// Socket.io Setup
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

io.on("connection", (socket) => {
  console.log("A user connected");

  handleSocketConnection(io, socket);

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Start Server
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
