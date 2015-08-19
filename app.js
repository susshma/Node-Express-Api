var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect("mongodb://localhost/SongsAPI")

var Song = require('./models/songModel')

var app = express();

var SongsRouter = express.Router();

SongsRouter.route('/songs')
    .get(function (req, res) {
        var query = req.query;
        Song.find(query, function (err, songs) {
            if (err)
                console.log('There is an error')
            else 
                res.json(songs)
        })

    });

SongsRouter.route('/song/:songid')
    .get(function (req, res) {
        Song.findById(query.params.songid, function (err, songs) {
            if (err)
                console.log('There is an error')
            else 
                res.json(songs)
        })

    });

app.use('/api', SongsRouter);

var port = process.env.PORT || 3000;

app.get('/', function (req, response){
    response.send("Wowzaaaaa");
});

app.listen(port, function () {
    console.log("We listening: " + port);
});