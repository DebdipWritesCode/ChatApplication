const express = require('express');
const http = require('http');
const cors = require('cors');
const connectDB = require('../config'); 
const { setupSocket } = require('./socket');

const app = express();
const server = http.createServer(app);

const allowedOrigins = ['https://chat-application-jh8r.vercel.app'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['X-Requested-With', 'Content-Type', 'Accept', 'Origin', 'Authorization'],
  credentials: true
}));

const apiRoutes = require('../routes/apiRoutes');
app.use('/api', apiRoutes);

connectDB();
setupSocket(server);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
