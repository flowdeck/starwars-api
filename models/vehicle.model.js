//* Imports
const mongoose = require('mongoose')

//* Vehicle schema
const VehicleSchema = new mongoose.Schema({
    vehicle_name: String,
    cargo_capacity: String,
    consumables: String,
    cost_in_credits: String,
    crew: String,
    films: String,
    length: String,
    manufacturer: String,
    max_atmosphering_speed: String,
    model: String,
    passengers: String,
    url: String,
    vehicle_class: String
}, {
    timestamps: true,
})

//* Export Vehilce model
module.exports = mongoose.model('Vehicles', VehicleSchema, 'vehicles')