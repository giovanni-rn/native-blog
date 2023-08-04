// express.js
const express = require("express");
const app = express();

// dotenv
require("dotenv").config({ path: "./config/.env" });

// db connect
require("./config/db");

// Parsing middlewares
app.use(express.json()); // process req.body
app.use(express.urlencoded({ extended: true }));

// routes
const postRoutes = require("./post.routes");
app.use("/", postRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
