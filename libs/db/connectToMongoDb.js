const mongoose = require('mongoose')
const chalk = require('chalk')

//* DB Config
const dbConfig = {
    HOST: '127.0.0.1',
    PORT: 27017,
    DB: 'starwars'
}

//* Connect to MongoDB
module.exports = async (onConnect) => {
    try {
        await mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => {
                console.log(chalk.cyanBright('Connected to MongoDB'))
                //* Call callback function on successful connection
                onConnect()
            })

    } catch (connectionError) {
        console.log(chalk.redBright('Error connecting to MongoDB'))
        global.handleError(connectionError)
        process.exit(1)
    }
}

//* Handle any errors after initial connection
mongoose.connection.on('error', runtimeError => {
    //* Note that Mongoose does not necessarily emit an 'error' event if it loses connectivity to MongoDB.
    //* You should listen to the disconnected event to report when Mongoose is disconnected from MongoDB.
    global.handleError(runtimeError)
})

module.exports

