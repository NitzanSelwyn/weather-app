const express = require("express");
const bodyParser = require("body-parser");
const watherController = require("../Controller/WeatherController");

const router = express.Router();

router.use(bodyParser.json());

router.post("/GetWeatherNow", watherController.GetWeatherNow);

module.exports = router;
