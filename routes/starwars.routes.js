//* Controllers
const StarWarsController = require('../controllers/starwars.controller.js')

module.exports = function (app) {

    //* Get Film by ID
    app.get('/films/:id', async (req, res) => {

        //* Get Film by id (url field used as id, per requirements)
        const film = await StarWarsController.getFilm(req.params.id)

        if (film instanceof Error) {
            //* Controller handles error, just return generic error wihtout details
            return res.status(500).json({ error: 'An error occurred while retrieving film.' })
        } else {
            //* Return patient
            return res.json(film)
        }
    })

    //* Get All Films
    app.get('/films', async (req, res) => {

        const films = await StarWarsController.getAllFilms()

        if (films instanceof Error) {
            //* Controller handles error, just return generic error wihtout details
            return res.status(500).json({ error: 'An error occurred while retrieving films.' })
        } else {
            //* Return patient
            return res.json(films)
        }
    })

    //* Get Person by ID
    app.get('/people/:id', async (req, res) => {

        //* Get Person by id (url field used as id, per requirements)
        const person = await StarWarsController.getPerson(req.params.id)

        if (person instanceof Error) {
            //* Controller handles error, just return generic error wihtout details
            return res.status(500).json({ error: 'An error occurred while retrieving person.' })
        } else {
            //* Return patient
            return res.json(person)
        }
    })

    //* Get All People
    app.get('/people', async (req, res) => {

        const people = await StarWarsController.getAllPeople()

        if (people instanceof Error) {
            //* Controller handles error, just return generic error wihtout details
            return res.status(500).json({ error: 'An error occurred while retrieving people.' })
        } else {
            //* Return patient
            return res.json(people)
        }
    })

    //* Get Planet by ID
    app.get('/planets/:id', async (req, res) => {

        //* Get Planet by id (url field used as id, per requirements)
        const planet = await StarWarsController.getPlanet(req.params.id)

        if (planet instanceof Error) {
            //* Controller handles error, just return generic error wihtout details
            return res.status(500).json({ error: 'An error occurred while retrieving planet.' })
        } else {
            //* Return patient
            return res.json(planet)
        }
    })

    //* Get All Planets
    app.get('/planets', async (req, res) => {

        const planets = await StarWarsController.getAllPlanets()

        if (planets instanceof Error) {
            //* Controller handles error, just return generic error wihtout details
            return res.status(500).json({ error: 'An error occurred while retrieving planets.' })
        } else {
            //* Return patient
            return res.json(planets)
        }
    })

    //* Get Species by ID
    app.get('/species/:id', async (req, res) => {

        //* Get Species by id (url field used as id, per requirements)
        const species = await StarWarsController.getSpecies(req.params.id)

        if (species instanceof Error) {
            //* Controller handles error, just return generic error wihtout details
            return res.status(500).json({ error: 'An error occurred while retrieving species.' })
        } else {
            //* Return patient
            return res.json(species)
        }
    })

    //* Get All Species
    app.get('/species', async (req, res) => {

        const species = await StarWarsController.getAllSpecies()

        if (species instanceof Error) {
            //* Controller handles error, just return generic error wihtout details
            return res.status(500).json({ error: 'An error occurred while retrieving species.' })
        } else {
            //* Return patient
            return res.json(species)
        }
    })

    //* Get Starship by ID
    app.get('/starships/:id', async (req, res) => {

        //* Get Starship by id (url field used as id, per requirements)
        const starship = await StarWarsController.getStarship(req.params.id)

        if (starship instanceof Error) {
            //* Controller handles error, just return generic error wihtout details
            return res.status(500).json({ error: 'An error occurred while retrieving starship.' })
        } else {
            //* Return patient
            return res.json(starship)
        }
    })

    //* Get All Starships
    app.get('/starships', async (req, res) => {

        const starships = await StarWarsController.getAllStarships()

        if (starships instanceof Error) {
            //* Controller handles error, just return generic error wihtout details
            return res.status(500).json({ error: 'An error occurred while retrieving starships.' })
        } else {
            //* Return patient
            return res.json(starships)
        }
    })

    //* Get Vehicle by ID
    app.get('/vehicles/:id', async (req, res) => {

        //* Get Starship by id (url field used as id, per requirements)
        const vehicle = await StarWarsController.getVehicle(req.params.id)

        if (vehicle instanceof Error) {
            //* Controller handles error, just return generic error wihtout details
            return res.status(500).json({ error: 'An error occurred while retrieving vehicle.' })
        } else {
            //* Return patient
            return res.json(vehicle)
        }
    })

    //* Get All Vehicles
    app.get('/vehicles', async (req, res) => {

        const vehicles = await StarWarsController.getAllVehicles()

        if (vehicles instanceof Error) {
            //* Controller handles error, just return generic error wihtout details
            return res.status(500).json({ error: 'An error occurred while retrieving vehicles.' })
        } else {
            //* Return patient
            return res.json(vehicles)
        }
    })

    //* Allow a custom vehicle to be added
    app.post('/vehicle', async (req, res) => {

        //* EXAMPLE vehicle object to POST
        //*  {
        //*     vehicle_name: 'Gareth starfighter',
        //*     cargo_capacity: '65',
        //*     consumables: '4 days',
        //*     cost_in_credits: '500000',
        //*     crew: '5',
        //*     films: '1, 2, 2003',
        //*     length: '9.4',
        //*     manufacturer: 'Ashton Fleet Works',
        //*     max_atmosphering_speed: '1500',
        //*     model: 'Tri Ion Engine/ ADV Starfighter Turbo Booster',
        //*     passengers: '0',
        //*     url: '8',
        //*     vehicle_class: 'starfighter',
        //* }

        const vehicle = await StarWarsController.createVehicle(req.body)

        if (vehicle instanceof Error) {
            //* Controller handles error, just return generic error wihtout details
            return res.status(500).json({ error: 'An error occurred while creating vehicle.' })
        } else {
            if (vehicle && vehicle._id) {
                //* Status 201 (created) created successfully
                //* Return vehicle id
                return res.status(201).json(vehicle._id)
            } else {
                return new Error('Vehicle was not created.')
            }
        }
    })

}