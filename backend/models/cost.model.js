const mongoose = require('mongoose');
var Sequelize = require('sequelize');

const Schema = mongoose.Schema;

const costSchema = new Schema({

    _id: {
        type: String,
        required: true,
        unique: true,
        trim: true

    },
    patientname: {
        type: String,
        required: true,
        unique: true,
        trim: true

    },
    date: {
        type: Date,
        required: true
    },

    testingname: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    scanCost: {
        type: Number
    },
    
    noOfScans: {
        type: Number
    },
    totalCost: {
        type: Number
    }
}, {
    timestamps: true,
})

const Cost = mongoose.model("Cost", costSchema);

module.exports = Cost;