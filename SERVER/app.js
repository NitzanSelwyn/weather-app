const express = require("express");
const app = express();
const cores = require("cors");
const weather = require("./Routes/Weather");
const bodyParser = require("body-parser");

app.use(cores());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/api/weather", weather);

module.exports = app;
