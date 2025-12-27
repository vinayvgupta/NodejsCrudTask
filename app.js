const express = require('express');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Register routes
app.use('/', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});