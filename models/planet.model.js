//* Imports
const mongoose = require('mongoose')

//* Planet schema
const PlanetSchema = new mongoose.Schema({
    planet_name: String,
    climate: String,
    diameter: String,
    films: String,
    gravity: String,
    orbital_period: String,
    population: String,
    residents: String,
    rotation_period: String,
    surface_water: String,
    terrain: String,
    url: String,
}, {
    timestamps: true,
})

//* Export Film model
module.exports = mongoose.model('Planets', PlanetSchema, 'planets')