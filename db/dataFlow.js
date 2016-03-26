var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var ObjectId    = Schema.ObjectId;

var DATA = new Schema({
    title: String,
    
});

mongoose.model('modelflow', DATA);