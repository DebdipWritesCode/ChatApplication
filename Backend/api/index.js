const express = require('express');
const http = require('http');
const connectDB = require('../config'); 
const { setupSocket } = require('../socket');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

app.use(cors());

const apiRoutes = require('../routes/apiRoutes');
app.use('/api', apiRoutes);

connectDB();

setupSocket(server);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
