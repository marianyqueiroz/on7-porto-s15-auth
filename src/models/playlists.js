const mongoose = require("mongoose");

const playlistsSchema = new mongoose.Schema({
    id: { type: Number },
    band: { type: String },
    genre: { type: String },
    music: { type: String }
}, {
    versionKey: false
});

const playlists = mongoose.model("playlists", playlistsSchema);

module.exports = playlists;