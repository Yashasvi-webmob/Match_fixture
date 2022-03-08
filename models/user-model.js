const mongoose = require('mongoose');

var userSchema=mongoose.Schema({
    email:{
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
        
    },
    username: {
        type: String, 
        required: true
    },
    sport: {
        type: [String], 
        required: true
    },
    teamName:{
        type: [String], 
        required: true},
    location: {
        type: String, 
        required: true,
        unique:"location is wrong"
    },
    isCaptain: {
        type:Boolean,
        required:true 
    }
},{
    timestamps:true  
    /*created: {
        type: Date,
        default: Date.now
      }*/
    });

   
    


module.exports =  mongoose.model("User",userSchema);