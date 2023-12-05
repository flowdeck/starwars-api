//* Imports
const mongoose = require('mongoose')

//* Starship schema
const StarshipSchema = new mongoose.Schema({
    starship_title: String,
    MGLT: String,
    cargo_capacity: String,
    consumables: String,
    cost_in_credits: String,
    crew: String,
    hyperdrive_rating: String,
    length: String,
    manufacturer: String,
    max_atmosphering_speed: String,
    model: String,
    passengers: String,
    starship_class: String,
    url: String,
}, {
    timestamps: true,
})

//* Export Film model
module.exports = mongoose.model('Starships', StarshipSchema, 'starships')