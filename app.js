/* Create express server */
const express = require("express");
/* Create enviroment variables */
const dotenv = require("dotenv");
/* Connect to database */
const connectDB = require("./config/db");

// Load config
dotenv.config({ path: "./config/config.env" });

/* create an instance of express app */
const app = express();

/* use process.env to access dotenv file */
const PORT = process.env.PORT || 5000;

/* test the server */
app.listen(
  PORT,
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`)
);

/* Connect to database */
connectDB();
