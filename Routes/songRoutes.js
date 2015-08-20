var express = require("express");

var routes = function (Song) {
    var SongsRouter = express.Router();

    var songController = require("../controllers/songController")(Song);

    SongsRouter.route('/songs')
        .post(songController.post)
        .get(songController.get);

    // middleware for request with ids
    SongsRouter.use('/songs/:songid', function (req, res, next) {
        Song.findById(req.params.songid, function (err, song) {
            if (err) {
                res.status(500).send(err);
            } else if (song) {
                req.song = song;
                next();
            } else {
                res.status(404).send("No records found");
            }
        });
    });

    SongsRouter.route('/songs/:songid')
        .get(function (req, res) {
            res.json(req.song);
        })
        .put(function (req, res) {
            song = req.song;
            song.title = req.body.title;
            song.rating = req.body.rating;
            song.artist = req.body.artist;
            song.release_date = req.body.release_date;
            song.save();
            res.json(song);
        })
        .patch(function (req, res) {
            // avoid updating the unique id
            if (req.body._id) {
                delete req.body._id;
            }

            for (var p in req.body) {
                req.song[p] = req.body[p]
            }
            req.song.save(function (err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.song);
                }
            });
        })
        .delete(function (req, res) {
            req.song.remove(function(err){
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(204).send("Peace out - removed");
                }
            });
        });

    return SongsRouter;
};

module.exports = routes;
