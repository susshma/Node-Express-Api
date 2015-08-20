var songController = function (Song) {
    var post = function (req, res) {
        var song = new Song(req.body);

        if (!req.body.title) {
            res.status(400);
            res.send("Title is required");
        } else {
            song.save();
            res.status(201)
            res.send(song);
        }
    }

    var get = function (req, res) {
        var query = req.query;
        Song.find(query, function (err, songs) {
            if (err)
                console.log('There is an error')
            else 
                res.json(songs)
        }); 
    }

    return {
        post: post,
        get: get
    }
}

module.exports = songController;