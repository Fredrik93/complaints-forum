var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: { type: String },
    text: { type: String },
    roomId: {
        type: Schema.Types.ObjectId,
        ref: 'room'
    }
});

module.exports = mongoose.model('posts', postSchema);