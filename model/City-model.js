const mongoose = require('mongoose');
const { Schema } = mongoose;

// Place Schema:
const CitySchema = new Schema({
    City: {type: String, required: true},
    City_desc: {type: String, required: true},
    Best_time_to_visit: {type: String, required: true},
    Ratings: Number,
});

// Place Model:
exports.City = mongoose.model('city', CitySchema);