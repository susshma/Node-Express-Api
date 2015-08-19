var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var songModel = new Schema({
    title: { type: String },
    rating: { type: String },
    artist: { type: String },
    relase_date: { type: String }
});

module.exports = mongoose.model('Song', songModel);