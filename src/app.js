require("dotenv-safe").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"));
db.on("open", function (){
  console.log("Successful connection!");
});

app.use(bodyParser.json());
app.use(function (req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept"
  );
  next();
});
app.use("/", index);
app.use("/users", users);
app.use("/playlists", playlists);

module.exports = app;