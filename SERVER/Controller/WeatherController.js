const CONFIG = require("../config");
const chalk = require("chalk");
const DarkSky = require("dark-sky");
const darksky = new DarkSky(CONFIG.DarkSkyApi.ApiKey);

exports.GetWeatherNow = async (req, res) => {
  const latitude = req.body.currLat;
  const longitude = req.body.currLng;
  console.log("asdsada");
  const forcast = await darksky
    .options({ latitude, longitude, units: "ca" })
    .get();

  res.send(forcast.currently);
};
