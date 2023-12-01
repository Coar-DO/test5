// src/server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/my-auth-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(bodyParser.json());
app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
