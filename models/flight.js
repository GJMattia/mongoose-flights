const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const defaultDepartDate = new Date();
defaultDepartDate.setFullYear(defaultDepartDate.getFullYear() + 1);


const desinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['JFK', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date
    }
})



const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Delta'],
        default: 'American'
    },
    airport: {
        type: String,
        enum: ['JFK', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
         type: Number,
         default: 1888,
         validate: {
            validator: function(value) {
              return value >= 10 && value <= 9999;
            },
            message: 'Flight number must be between 10 and 9999'
          }
    },
    departs: {
        type: Date,
        default: defaultDepartDate
    },
    destinations: [desinationSchema]
}, {
    timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);