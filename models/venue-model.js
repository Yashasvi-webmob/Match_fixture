const mongoose = require('mongoose');

const venueSchema=mongoose.Schema({
    stadium: { 
        type: String, 
        required: true 
    },
    team: { 
        type: [String], 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    },
    });
    
    

module.exports = mongoose.model("venue",venueSchema);