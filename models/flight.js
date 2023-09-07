const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const defaultDepartDate = new Date();
defaultDepartDate.setFullYear(defaultDepartDate.getFullYear() + 1);

const flightSchema = new Schema({
    airline: {
        type: String,
        default: 'American'
    },
    airport: {
        type: String,
        default: 'DEN'
    },
    flightNo: {
         type: Number,
         default: 1888
    },
    departs: {
        type: Date,
        default: defaultDepartDate
    }
}, {
    timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);