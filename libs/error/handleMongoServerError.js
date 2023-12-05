module.exports = function handleMongoServerError(err) {

    //* Exit if not a MongoServerError
    if (err.name !== 'MongoServerError' || err.name !== 'MongoBulkWriteError') {
        console['log'](`Error type not implemented: ${err.name}`)
        console['log'](err)
        return new Error(err)
    }

    //* Complete List of MongoDB Errors
    //* https://github.com/mongodb/mongo/blob/master/src/mongo/base/error_codes.yml

    switch (err.code) {
        case 11000: return on_DuplicateKeyError(err)
        case 14031:
            //* OutOfDiskSpace
            console.log(`MongoServerError HANDLER NOT IMPLEMENTED: ${err.code}`)
            break
        default:
            console.log(`MongoServerError HANDLER NOT IMPLEMENTED: ${err.code}`)
            return new Error(`MongoServerError HANDLER NOT IMPLEMENTED: ${err.code}`)
    }

}

const on_DuplicateKeyError = (err) => {

    //* Mongo: Duplicate Key Error
    if (err?.message) return new Error(err.message)
    else return 'Error: Unknown Validation Error'

}