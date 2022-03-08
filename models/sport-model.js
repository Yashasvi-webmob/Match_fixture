const mongoose = require('mongoose');

var sportSchema=mongoose.Schema({
    sport: {
        type: String, 
        required: true
    },
    teams: {
        type:[String], 
        required: true
    }
    });
    
   
module.exports = mongoose.model("sport",sportSchema);