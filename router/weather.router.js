var weatherController = require("./../controllers/weather.controllers");
var userController = require("./../controllers/user.controller");
var router = require("express").Router();

module.exports = function() {
  router.get("/weather", weatherController.getAllWeather);
  router.get("/weather/:id", weatherController.getOneWeather);
  router.post("/Postweather", weatherController.createWeather);
  router.put("/weather/:id", weatherController.updateWeather);
  router.delete("/Deleteweather/:id", weatherController.deleteWeather);
  router.post("/user/create",userController.register);
  router.get("/user/get",userController.getAllUser);
  router.post("/user/sign",userController.sign_in);
  // router.get("/register",registerContronller)
  return router;
};


