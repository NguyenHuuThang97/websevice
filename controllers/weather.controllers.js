var message = require("./../util/message");
var weatherService = require("./../service/weather.service");

module.exports = {
    getAllWeather:getAllWeather,
    getOneWeather:getOneWeather,
    createWeather:createWeather,
    updateWeather:updateWeather,
    deleteWeather:deleteWeather,
}

function getAllWeather(req,res,next) {
    weatherService.getAllWeather((err,response) => {
        if(err){
            res.status(400).send(err);
        }else{
            res.send(response);
        }
    });
}

function getOneWeather(req,res,next){
    let id = req.params.id;
    if(!id){
        res.status(400).send({
            message:message.ERROR_MESSAGE.WEATHER.INVALD
        });
    }

    weatherService.getOneWeather(id).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.status(400).send(err);
    })
}

function createWeather(req,res,next){
    var params = {
        name:req.body.name,
        description:req.body.description,
        day: req.body.day,
        time:req.body.time,
        tempmax:req.body.tempmax,
        tempmin:req.body.tempmin,
        tempnow:req.body.tempnow,
        humid:req.body.humid,
        statenow: req.body.statenow,
        uv: req.body.uv,
        winspeed:req.body.winspeed
    }

    weatherService.createWeather(params,(err,response) => {
        if(err){
            res.send(err);
        }else{
            res.send(response);
        }
    });
}

function updateWeather(req,res,next){
    let params = {
        name:req.body.name,
        description:req.body.description,
        day: req.body.day,
        time:req.body.time,
        tempmax:req.body.tempmax,
        tempmin:req.body.tempmin,
        tempnow:req.body.tempnow,
        humid:req.body.humid,
        statenow: req.body.statenow,
        uv: req.body.uv,
        winspeed:req.body.winspeed
    }

    weatherService.updateWeather(params).then((response) =>{
        res.send(response);
    }).catch((err) => {
        res.status(err.statusCode).send(err);
    })
}

function deleteWeather(req,res,next){
    let id = req.params.id;

    weatherService.deleteWeather(id).then((response) =>{
        res.send(response);
    }).catch((err) =>{
        res.status(err.statusCode).send(err);
    });
}