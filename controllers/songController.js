var songController = function (Song) {
    var post = function (req, res) {
        
        var song = new Song(req.body);
        song.save();
        res.status(201).send(song);
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