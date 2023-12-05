//* Imports
const mongoose = require('mongoose')

//* Species schema
const SpeciesSchema = new mongoose.Schema({
    species_name: String,
    average_height: String,
    average_lifespan: String,
    classification: String,
    designation: String,
    eye_colors: String,
    films: String,
    hair_colors: String,
    homeworld: String,
    language: String,
    people: String,
    skin_colors: String,
    url: String
}, {
    timestamps: true,
})

//* Export Film model
module.exports = mongoose.model('Species', SpeciesSchema, 'species')