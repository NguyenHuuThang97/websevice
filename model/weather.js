var mongooes = require("mongoose");
var Schema = mongooes.Schema;
const autoIncrement = require("mongoose-auto-increment");
const db = require("../db");
var connection = mongooes.createConnection("mongodb://localhost:27017/weather");
autoIncrement.initialize(connection);
const weatherSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  day:{
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  tempnow: {
    type: String,
    required: true
  },
  tempmax: {
    type: String,
    required: true
  },
  tempmin: {
    type: String,
    required: true
  },
  humid: {
    type: String,
    required: true
  },
  statenow: {
    type: String,
    required: true
  },
  uv: {
    type: String,
    required: true
  },
  winspeed: {
    type: String,
    required: true
  }
});
weatherSchema.plugin(autoIncrement.plugin, {
  model: "weather",
  field: "_id",
  startAt: 1
});
const weather = mongooes.model("weather", weatherSchema); 
module.exports = weather;
