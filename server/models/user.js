var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: { type: String },
    age: { type: Number },
    email: { type: String },
    password: { type: Number }
});

module.exports = mongoose.model('users', userSchema);