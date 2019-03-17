var weather = require("../model/weather");
var message = require("./../util/message");
module.exports = {
  getAllWeather: getAllWeather,
  getOneWeather: getOneWeather,
  createWeather: createWeather,
  updateWeather: updateWeather,
  deleteWeather: deleteWeather
};

function getAllWeather(callback) {
  //vào db lấy tất cả địa điểm ra
  weather.find({}).exec((err, weathers) => {
    if (err) {
      //trong quá trình lấy nếu có xảy ra lỗi
      callback(err);
    } else {
      //đưa kết quả cho controller
      callback(null, weathers);
    }
  });
}

function getOneWeather(id) {
  return new Promise((res, rej) => {
    //tìm một địa điểm có _id = id
    weather.findOne({ _id: id}).exec((err, weatherData) => {
      if (err) {
        rej(err);
      } else {
        if (!weatherData) {
          rej({
            statusCode: 400,
            message: message.ERROR_MESSAGE.WEATHER.NOT_FOUND
          });
        } else {
          res(weatherData);
        }
      }
    });
  });
}

function createWeather(request, callback) {
  var newWeather = new weather({
    day: request.day,
    cityName: request.cityName,
    state: request.state,
    temp: request.temp
  });
 
  newWeather.save((err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null,response);
    }
  });
}

function updateWeather(request) {
  return new Promise((res, rej) => {
    weather.find({
        _id: request.id
      }).exec((err, weatherData) => {
        if (err) {
          rej(err);
        } else {
          if (!weatherData) {
            rej({
              statusCode: 400,
              message: message.ERROR_MESSAGE.WEATHER.NOT_FOUND
            });
          } else {
            // có địa chỉ id của địa điểm mình cần sửa thì cập nhật lại dữ liệu
            weatherData.day = request.day || weatherData.day;
            weatherData.cityName = request.cityName || weatherData.cityName; // nếu mà có thay đổi thì thay đổi không thì giữ nguyên cái cũ
            weatherData.state = request.state || weatherData.state;
            weatherData.temp = request.temp || weatherData.temp;

            weatherData.save((err, response) => {
              if (err) {
                rej(err);
              } else {
                res(response); 
              }
            });
          }
        }
      });
  });
}

function deleteWeather(id) {
  return new Promise((res, rej) => {
    weather.find({ _id: id }).exec((err, weatherData) => {
      if (err) {
        rej(err);
      } else {
        if (!weatherData) {
          rej({
            statusCode: 400,
            message: message.ERROR_MESSAGE.WEATHER.NOT_FOUND
          });
        }else{
            weather.remove({_id:id}).exec((err,response) => {
                if(err){
                    rej(err);
                }else{
                    res({
                        message: message.SUCCESS_MESSAGE.WEATHER.DELETED
                    });
                }
            })
        }
      }
    });
  });
}
