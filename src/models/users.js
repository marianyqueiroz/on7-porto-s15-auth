const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    senha: { type: String },
}, {
    version: false
});

const users = mongoose.model("users", usersSchema);

module.exports = users;