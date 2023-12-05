//* Imports
const mongoose = require('mongoose')

//* People schema
//* This would probably be `PersonSchema` but the API calls it `People` so keeping consistency
const PeopleSchema = new mongoose.Schema({
    character_name: String,
    birth_year: String,
    eye_color: String,
    films: String,
    gender: String,
    hair_color: String,
    height: String,
    homeworld: String,
    mass: String,
    skin_color: String,
    starships: String,
    url: String,
    vehicles: String,
}, {
    timestamps: true,
})

//* Export People model
module.exports = mongoose.model('People', PeopleSchema, 'people')