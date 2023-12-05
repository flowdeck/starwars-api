# Star Wars API - CCSD

> In the following routes, id refers to the "url" field of the record, not the Mongo '_id'

## Routes

#### Get All Films
GET http://starwars-api.garethashton.com/films

#### Get Film by Id
GET http://starwars-api.garethashton.com/films/1

> Film record includes populated Vehicle record(s) to demonstrate relational lookup

#### Get All People
GET http://starwars-api.garethashton.com/people

#### Get People by Id
GET http://starwars-api.garethashton.com/people/1

#### Get All Planets
GET http://starwars-api.garethashton.com/planets

#### Get Planet by Id
GET http://starwars-api.garethashton.com/planets/1

#### Get All Species
GET http://starwars-api.garethashton.com/species

#### Get Species by Id
GET http://starwars-api.garethashton.com/species/1

#### Get All Starships
GET http://starwars-api.garethashton.com/starships

#### Get Starships by Id
GET http://starwars-api.garethashton.com/starships/2

## Vehicles

#### Get All Vehicles
GET http://starwars-api.garethashton.com/vehicles

#### Get Vehicle by Id
GET http://starwars-api.garethashton.com/vehicles/4

#### Create Vehicle
POST http://starwars-api.garethashton.com/vehicles

#### Update Vehicle by Id
PUT http://starwars-api.garethashton.com/vehicles/100

> Will return 204 (no content) on successful update

#### Example BODY for POST and PUT
> {
		"vehicle_name": "Gareth Starfighter",
		"cargo_capacity": "65",
		"consumables": "4 days",
		"cost_in_credits": "500000",
		"crew": "5",
		"films": "1, 2, 2003",
		"length": "9.4",
		"manufacturer": "Ashton Fleet Works",
		"max_atmosphering_speed": "1500",
		"model": "Tri Ion Engine/ ADV Starfighter Turbo Booster",
		"passengers": "0",
		"url": "100",
		"vehicle_class": "starfighter"
}

#### Delete Vehicle by Id
DELETE http://starwars-api.garethashton.com/vehicles/100

> Will return 204 (no content) on successful delete

### JWT Token Example


#### Get Access Token by Film Id
> Just for demonstration, generate an 24 hour access token using film id to sign

GET http://starwars-api.garethashton.com/get-token-for-film/1



