const User = require('./user-model');
const mongoose = require("mongoose");

var matchSchema = mongoose.Schema({
    stadium:{
        type: String,
        required: true
    },
    requestingCaptain:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: User
    },
    requestedCaptain:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: User
    },
    sport:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    startTime:{
        type: String
    },
    endTime:{
        type: String
    },
    accepted:{
        type:Boolean,
        required: true,
        default: false
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("match",matchSchema); 
