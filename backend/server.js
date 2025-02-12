const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import student routes
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json()); // Ensures JSON parsing

// Routes
app.use('/api/students', studentRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
