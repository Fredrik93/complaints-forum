var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
    userName: {type: String},
    age: {type: Number},
    email: {type: String},
    password: {type: String}
});

module.exports = mongoose.model('admins', adminSchema);