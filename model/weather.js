const mongooes = require("mongoose");
const Schema = mongooes.Schema;
const autoIncrement = require('mongoose-auto-increment');
const db = require("../db");
var connection = mongooes.createConnection('mongodb://localhost:27017/weather');
autoIncrement.initialize(connection);
const weatherSchema = new Schema({
  day: {
    type: String,
    required: true
  },
  cityName: {
    type: String,
    required: true,
    unique:true
  },
  state: {
    type: String,
    required: true
  },
  temp: {
    type: String,
    required: true    
  }

});
weatherSchema.plugin(autoIncrement.plugin, {
  model: 'weather',
  field: '_id',
  startAt:1
});
const weather = mongooes.model("weather", weatherSchema); //biên dịch mô hình cho schema.
// tham số thứ 1 là để tao ra 1 colecction cho mô hình, tham số thứ 2 là là schema mà muốn dùng để tạo mô hình

module.exports = weather;
