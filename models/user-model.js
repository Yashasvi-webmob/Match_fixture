const mongoose = require('mongoose');

var userSchema=mongoose.Schema({
    userId: {
        type: String, 
        required: true,
        
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
    /*email: {
        type: String,
        trim: true,
        unique: "Email already exists",
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
        required: "Email is required"
      },
      hashed_password: {
        type: String,
        required: "Password is required"
      },*/
      created: {
        type: Date,
        default: Date.now
      }
    });

   
    


module.exports =  mongoose.model("User",userSchema);