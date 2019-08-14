const CONFIG = require("../config");
const chalk = require("chalk");
const DarkSky = require("dark-sky");
const darksky = new DarkSky(CONFIG.DarkSkyApi.ApiKey);

exports.GetWeatherNow = async (req, res) => {
  const latitude = 37.8267;
  const longitude = -122.423;
  console.log("asdsada");
  const forcast = await darksky
    .options({ latitude, longitude, units: "ca" })
    .get();

  console.log(forcast.currently);
};
