const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let events = new Schema({
    Images:{
        type: String
    },
    cardtitles:{
        type: String

    },
    shortmessages:{
        type: String
    }
});   
module.exports = mongoose.model('Events', events);
 