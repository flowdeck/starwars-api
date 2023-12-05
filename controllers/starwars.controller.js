
//** Models */
const FilmModel = require('../models/film.model')
const PeopleModel = require('../models/people.model')
const PlanetModel = require('../models/planet.model')
const SpeciesModel = require('../models/species.model')
const StarshipModel = require('../models/starship.model')
const VehicleModel = require('../models/vehicle.model')

module.exports = {

    //* Get single Film record by id (url field used as id)
    getFilm: async (id) => {

        try {
            //* Normally we would use findById() but since we are using url as id, we need to use find() and specify the url field
            const film = await FilmModel
                .find({ url: id })
                .catch(error_onFind => { return global.handleError(error_onFind) })

            if (!film) {

                const notFoundError = new Error(`Film with url=${id} was not found.`)
                return notFoundError
            } else {
                return film
            }

        } catch (error) {
            return global.handleError(error)
        }
    },

    //* Get All Films
    getAllFilms: async () => {

        try {
            const films = await FilmModel
                .find({})
                .catch(error_onFindById => { return global.handleError(error_onFindById) })

            return films

        } catch (error) {
            return global.handleError(error)
        }
    },

    //* Get single Person record
    getPerson: async (id) => {

        try {
            const person = await PeopleModel
                .find({ url: id })
                .catch(error_onFind => { return global.handleError(error_onFind) })

            if (!person) {

                const notFoundError = new Error(`Person with url=${id} was not found.`)
                return notFoundError
            } else {
                return person
            }

        } catch (error) {
            return global.handleError(error)
        }
    },

    //* Get All People
    getAllPeople: async () => {

        try {
            const people = await PeopleModel
                .find({})
                .catch(error_onFindById => { return global.handleError(error_onFindById) })

            return people

        } catch (error) {
            return global.handleError(error)
        }
    },

    //* Get single Planet record
    getPlanet: async (id) => {

        try {
            const planet = await PlanetModel
                .find({ url: id })
                .catch(error_onFind => { return global.handleError(error_onFind) })

            if (!planet) {

                const notFoundError = new Error(`Planet with url=${id} was not found.`)
                return notFoundError
            } else {
                return planet
            }

        } catch (error) {
            return global.handleError(error)
        }
    },

    //* Get All Planets
    getAllPlanets: async () => {

        try {
            const planets = await PlanetModel
                .find({})
                .catch(error_onFindById => { return global.handleError(error_onFindById) })

            return planets

        } catch (error) {
            return global.handleError(error)
        }
    },

    //* Get single Species record
    getSpecies: async (id) => {

        try {
            const species = await SpeciesModel
                .find({ url: id })
                .catch(error_onFind => { return global.handleError(error_onFind) })

            if (!species) {

                const notFoundError = new Error(`Species with url=${id} was not found.`)
                return notFoundError
            } else {
                return species
            }

        } catch (error) {
            return global.handleError(error)
        }
    },

    //* Get All Species
    getAllSpecies: async () => {

        try {
            const species = await SpeciesModel
                .find({})
                .catch(error_onFindById => { return global.handleError(error_onFindById) })

            return species

        } catch (error) {
            return global.handleError(error)
        }
    },

    //* Get single Starship record
    getStarship: async (id) => {

        try {
            const starship = await StarshipModel
                .find({ url: id })
                .catch(error_onFind => { return global.handleError(error_onFind) })

            if (!starship) {

                const notFoundError = new Error(`Starship with url=${id} was not found.`)
                return notFoundError
            } else {
                return starship
            }

        } catch (error) {
            return global.handleError(error)
        }
    },

    //* Get All Starships
    getAllStarships: async () => {

        try {
            const starships = await StarshipModel
                .find({})
                .catch(error_onFindById => { return global.handleError(error_onFindById) })

            return starships

        } catch (error) {
            return global.handleError(error)
        }
    },

    //* Get single Vehicle record
    getVehicle: async (id) => {

        try {
            const vehicle = await VehicleModel
                .find({ url: id })
                .catch(error_onFind => { return global.handleError(error_onFind) })

            if (!vehicle) {

                const notFoundError = new Error(`Vehicle with url=${id} was not found.`)
                return notFoundError
            } else {
                return vehicle
            }

        } catch (error) {
            return global.handleError(error)
        }
    },

    //* Get All Vehicles
    getAllVehicles: async () => {

        try {
            const vehicles = await VehicleModel
                .find({})
                .catch(error_onFindById => { return global.handleError(error_onFindById) })

            return vehicles

        } catch (error) {
            return global.handleError(error)
        }
    },

    //* Create Vehicle
    createVehicle: async (data) => {

        try {
            const vehicle = new VehicleModel(data)

            return await vehicle.save()
                .then(doc => { return doc })
                .catch(error_onSave => { return global.handleError(error_onSave) })

        } catch (error) {
            return global.handleError(error)
        }

    },

}
