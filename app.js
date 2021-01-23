const path = require("path");
/* add express server */
const express = require("express");
/* add enviroment variables */
const dotenv = require("dotenv");
/* add a database connection */
const connectDB = require("./config/db");
/* add HTTP logger middleware */
const morgan = require("morgan");
/* add express handlebars */
var exphbs = require("express-handlebars");

// Load config
dotenv.config({ path: "./config/config.env" });

/* create an instance of express app */
const app = express();

/* add morgan middleware only in development mode */
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

/* use process.env to access dotenv file */
const PORT = process.env.PORT || 5000;

/* Connect to database */
connectDB();

//* Handlebars docs: https://www.npmjs.com/package/express-handlebars
/* The string name of the file extension used by the templates. This value should correspond with the extname under which this view engine is registered with Express when calling app.engine(). */
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

//*Routes
app.use("/", require("./routes/index"));

//* Serve Static Files
// public/ is where static files are served
app.use(express.static(path.join(__dirname, "public")));

/* Run the server */
app.listen(
  PORT,
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`)
);
