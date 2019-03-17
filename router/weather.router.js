var weatherController = require("./../controllers/weather.controllers");
var router = require("express").Router();

module.exports = function() {
  router.get("/weather", weatherController.getAllWeather);
  router.get("/weather/:id", weatherController.getOneWeather);
  router.post("/weather", weatherController.createWeather);
  router.put("/weather/:id", weatherController.updateWeather);
  router.delete("/weather/:id", weatherController.deleteWeather);

  return router;
};


