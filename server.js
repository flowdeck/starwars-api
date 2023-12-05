const express = require('express')
const app = express()
const cors = require('cors')
const chalk = require('chalk')

//* Load environment variables from .env file
require('dotenv').config()

//* Constants
const api_port = 8091

//* Setup CORS options
var corsOptions = {
    origins: ['http://localhost:8091', 'http://starwars-api.garethashton.com', 'https://starwars-api.garethashton.com']
}

//* Enable CORS
app.use(cors(corsOptions))

//* Parses incoming JSON requests and put the parsed data in req.body
app.use(express.json())

//* Add global error handler, accessible from anywhere in the app
global.handleError = require(`${require('path').resolve('./')}/libs/error/handleError`)

//* Import Star Wars routes
require('./routes/starwars.routes.js')(app)

//* Request Logger - logs all request color-coded using chalk
app.use(require('./libs/log/requestLogger'))

//* Connect to MongoDB
const connectToMongoDb = require('./libs/db/connectToMongoDb')
connectToMongoDb(() => {
    //* Start API Server
    app.listen(api_port, () => console.log(chalk.cyanBright(`Listening on port ${api_port}`)))
})
