var db = require("./db");
var express = require("express");
//khởi tạo server
const bodyParser = require("body-parser");
var app = express();
var weather = require("./model/weather");
var use = require("./model/user.model");
var weatherRouter = require('./router/weather.router')
const PORT = process.env.PORT || 5000; // process.env là 1 object chưa tất cả các thông tin về môi trường mà nodejs đang chạy

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
jsonwebtoken = require("jsonwebtoken");
var allowCrossDomain = function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}
app.use('/api',weatherRouter());
app.use(allowCrossDomain);
app.listen(PORT, function() {
  console.log("Listening on " + PORT);
});

app.get("/", (req, res) => {
  res.send("listening on " + PORT);
});

// app.get("/weather", (req, res) => {
//   weather.find().then(
//     weather => {
//       res.send({ weather });
//     },
//     e => {
//       res.status(400).send(e);
//     });
// });

// app.get("/weather/:id" , (req,res) => {
//   var weatherID = {id: req.params.id};
//   weather.findOne(weatherID, (err,raw) => {
//     if(err){
//       res.status(400).send(err);
//     }
//     res.send(raw);
//   });
// });

// app.post("/Postweather",(req,res) => {
//   var weatherModel = req.body;
//   var Weather = new weather(weatherModel);
//   Weather.save().then((Weather) => {
//     res.send(Weather);
//   }, (e) => {
//     res.status(400).send(e);
//   });
// });

// app.delete("/weather/:id",(req,res) => {
//   var weatherID = {id: req.params.id};
//   weather.findOneAndRemove(weatherID, (err,raw) => {
//     if(err){
//       res.status(400).send(err);
//     }
//     res.send(raw);
//   });
// });

// app.put("/weather/:id",function(req,res){
//   var ID = {id:req.params.id};
//   weather.findOneAndUpdate(ID,(err,raw) =>{
//     if(!err){
//       res.send(raw);
//     }
//     else {
//       res.status(400).send(err);
//     }
//   });
// });


//tạo db
// weather.create(
//   {
//     day: "monday",
//     cityName: "Nghệ An",
//     state: "Việt Nam",
//     temp: " 26"
//   },
//   {
//     day: "monday",
//     cityName: "Lâm Đồng",
//     state: "Việt Nam",
//     temp: " 26"
//   }
// );

//tìm
// weather.find().exec((err,weathers) => {
//     console.log(weathers);
// });

//sửa

// weather.update({cityName:"Huế"}, {cityName:"Hà Tĩnh"}).exec((err,result) => {
//     console.log(result);
// });
// exec để thực hiện các hành động

// remove
//  weather.remove({cityName:"Hà Tĩnh"}).exec((err,result) => {
//      console.log(result);
//  })
