//* Imports
const mongoose = require('mongoose')

//* Film schema
const FilmSchema = new mongoose.Schema({
    movie_title: String,
    episode_id: String,
    characters: String,
    director: String,
    description: String,
    planets: String,
    producer: String,
    release_date: String,
    species: String,
    starships: String,
    url: String,
    vehicles: String
}, {
    timestamps: true,
})

//* Export Film model
module.exports = mongoose.model('Films', FilmSchema, 'films')