var express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const router = require("./config/routes.js");
const DIR = path.resolve();
const staticPublicPath = path.join(DIR, "public");
// app.use(express.static(__dirname + "/public"));
const viewsPath = path.join(DIR, "views");
var app = express();


app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticPublicPath));
app.set("views", viewsPath);
app.set("view engine", "ejs");
app.use(router);

dotenv.config();

app.listen(3000, function (req, res) {
  console.log("Connected on port:3000");
});

module.exports = app;
const { Client } = require("pg");

const client = new Client();
client.connect(); 


// app.get("/", function (req, res) {
  //   res.render("index.ejs");
// });

// app.get("/create", function (req, res) {
//   res.render("pages/createCar.ejs");
// });

// // Server setup
