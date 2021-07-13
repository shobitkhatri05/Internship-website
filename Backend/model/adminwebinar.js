const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let event = new Schema({
    Image:{
        type: String
    },
    cardtitle:{
        type: String

    },
    shortmessage:{
        type: String
    }
});
module.exports = mongoose.model('Event', event);