const User = require('./user-model');
const mongoose = require("mongoose");

var matchSchema = mongoose.Schema({
    stadium:{
        type: String,
        required: true
    },
    Captain1:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: User
    },
    Captain2:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: User
    },
    sport:{
        type: String,
        required: true
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

exports.module = mongoose.model("match",matchSchema); 