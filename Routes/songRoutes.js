var express = require("express");

var routes = function (Song) {
    var SongsRouter = express.Router();

    SongsRouter.route('/songs')
    .post(function (req, res) {
        var song = new Song(req.body);
        song.save();
        res.status(201).send(song);
    })
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

    return SongsRouter;
};

module.exports = routes;
