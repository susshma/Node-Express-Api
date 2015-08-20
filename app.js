var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect("mongodb://localhost/SongsAPI")

var Song = require('./models/songModel')

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var SongsRouter = require('./Routes/songRoutes')(Song)

app.use('/api', SongsRouter);

var port = process.env.PORT || 3000;

app.get('/', function (req, response){
    response.send("Wowzaaaaa");
});

app.listen(port, function () {
    console.log("We listening: " + port);
});