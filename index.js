var express = require("express");
var app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.static(__dirname + "/public"));

const { Client } = require("pg");

const client = new Client();
client.connect(); 

// const viewsPath = path.join(DIR, "views");

// Set EJS as templating engine
// app.set("views", viewsPath);
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index.ejs");
});

// Server setup
app.listen(3000, function (req, res) {
  console.log("Connected on port:3000");
});
