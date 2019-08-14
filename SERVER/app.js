const express = require("express");
const DarkSkyApi = require("dark-sky-api");
const app = express();
const cores = require("cors");
const weather = require("./Routes/Weather");

const CONFIG = require("./config");
const DarkSky = require("dark-sky");
const darksky = new DarkSky(CONFIG.DarkSkyApi.ApiKey);

app.use("/api/weather", weather);
app.use(cores());

module.exports = app;
