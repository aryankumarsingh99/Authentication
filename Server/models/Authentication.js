const mongoose = require("mongoose");

const  UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const  AuthenticationModel = mongoose.model("Authentication", UserSchema);

module.exports = AuthenticationModel;