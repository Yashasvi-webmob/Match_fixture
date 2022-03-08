const mongoose = require('mongoose');

var teamSchema=mongoose.Schema({
   users: {
       type: [String], 
       required: true
    },
   team: {
       type: String, 
       required: true
    },
   sport: {
       type: [String], 
       required: true
    },
   stadium: {
       type: String, 
       required: true
    }//each team only has one stadium alloted to them as home stadium.
    });
    
   

module.exports =  mongoose.model("team",teamSchema);