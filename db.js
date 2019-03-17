var config = require('./config').mongdb;
var mongoose = require("mongoose");
var MongoClient = require("mongodb").MongoClient;
var autoIncrement = require("mongodb-autoincrement");
mongoose.Promise = global.Promise;
// kết nối với db
var url = 'mongodb://localhost:27017/weather' ;
var con = mongoose.connect(url, function(err,db) {
  if (err) {
      console.log('err: ' + err);
  }
  else {
    console.log("Successfuly conected", url);
  }
});

module.exports = con; 
