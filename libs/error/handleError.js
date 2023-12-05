const mongoose = require('mongoose')
const { MongoServerError } = require('mongodb')

//* Error Handlers
const handleMongooseError = require('./handleMongooseError')
const handleMongoServerError = require('./handleMongoServerError')

module.exports = function handleError(err) {

    if (err instanceof mongoose.Error) {
        //* Handles all MongooseError Types
        return handleMongooseError(err)
    } else if (err instanceof MongoServerError) {
        //* Handles all MongoServerError Types
        return handleMongoServerError(err)
    } else if (err instanceof Error) {
        //* Return generic error
        console.log(err)
        return err
    } else {
        console.log('NOT IMPLEMENTED: Unknown Error Condition')
        console.log(err)
        return err
    }

}

