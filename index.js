const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

// Import Routes
const userRoutes = require("./routes/userRoutes");

// Define port number
const PORT = process.env.PORT || 4000;

// Middleware setup
app.use(cors());
app.use(express.json());

// Connect to database and cloudinary
require("./config/database").dbconnect();

// Route setup
app.use("/user", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("<h1>Hello Hi Bye</h1>");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
