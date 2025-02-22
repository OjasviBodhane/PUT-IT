require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Allows Express to parse JSON
app.use(cors()); // Enables Cross-Origin Resource Sharing

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch(err => console.log("❌ MongoDB connection error:", err));

// Sample Route
app.get("/", (req, res) => {
    res.send("Server is running with Express & MongoDB!");
});

// Start the Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
