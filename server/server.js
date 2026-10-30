const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

// Database Connect
connectDB();

const app = express();

// Middlewares
app.use(cors({
  origin: '*', // Development aur mobile testing ke liye sabhi origins allow hain
  credentials: true
}));
app.use(express.json());

// Routes Mounting
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// Basic Route
app.get('/', (req, res) => {
  res.send('Unique Solution Group API is running...');
});

const PORT = process.env.PORT || 5000;

// Bind to '0.0.0.0' so it accepts local network / mobile hotspot connections
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT} and listening on all network interfaces`);
});