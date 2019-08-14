const express = require("express");
const bodyParser = require("body-parser");
const watherController = require("../Controller/WeatherController");

const router = express.Router();

router.use(bodyParser.json());

router.get("/GetWeatherNow", watherController.GetWeatherNow);

module.exports = router;
