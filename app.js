const express = require("express");
require("dotenv/config");
const app = express();
const mongoose = require("mongoose");

const expressLayout = require("express-ejs-layouts");

// EJS
app.use(expressLayout);
app.set("view engine", "ejs");

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// DB configuration
const { MongoURI } = require("./config/keys");

// Connecting Mongo
const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connection successfull.");
  } catch (err) {
    console.log(err);
  }
};
connectDB(MongoURI);

// Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/user"));

// Initializing App
const PORT = process.env.PORT || 404;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
