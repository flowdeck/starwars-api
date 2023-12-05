module.exports = function handleMongooseError(err) {

    //* MongooseError Types
    //* https://mongoosejs.com/docs/api/error.html

    switch (err.name) {
        case 'CastError': return onCastError(err)
        case 'DivergentArrayError':
            console.log(`MongooseError HANDLER NOT IMPLEMENTED: ${err.name}`)
            break
        case 'DocumentNotFoundError':
            console.log(`MongooseError HANDLER NOT IMPLEMENTED: ${err.name}`)
            break
        case 'MissingSchemaError':
            console.log(`MongooseError HANDLER NOT IMPLEMENTED: ${err.name}`)
            break
        case 'MongooseServerSelectionError':
            console.log(`MongooseError HANDLER NOT IMPLEMENTED: ${err.name}`)
            break
        case 'OverwriteModelError':
            console.log(`MongooseError HANDLER NOT IMPLEMENTED: ${err.name}`)
            break
        case 'ParallelSaveError':
            console.log(`MongooseError HANDLER NOT IMPLEMENTED: ${err.name}`)
            break
        case 'StrictModeError':
            console.log(`MongooseError HANDLER NOT IMPLEMENTED: ${err.name}`)
            break
        case 'StrictPopulateError': return onStrictPopulateError(err)
        case 'ValidationError': return onValidationError(err)
        case 'ValidatorError':
            console.log(`MongooseError HANDLER NOT IMPLEMENTED: ${err.name}`)
            break
        case 'VersionError':
            console.log(`MongooseError HANDLER NOT IMPLEMENTED: ${err.name}`)
            break
        case 'messages':
            console.log(`MongooseError HANDLER NOT IMPLEMENTED: ${err.name}`)
            break
        //**Other error names encountered */
        case 'ObjectParameterError': return onObjectParameterError(err)
        default:
            return 'NOT IMPLEMENTED: Unhandled Mongoose Error'
    }

}

const onCastError = (err) => {

    //TODO info about cast error

    if (err?.message) return new Error(err.message)
    else return 'Error: Unknown Validation Error'

}

const onStrictPopulateError = (err) => {

    //TODO info about StrictPopulateError

    if (err?.message) return new Error(err.message)
    else return 'Error: Unknown Validation Error'

}

const onValidationError = (err) => {

    //* Mongoose Validation Failed
    //* https://mongoosejs.com/docs/validation.html

    if (err?.message) return new Error(err.message)
    else return 'Error: Unknown Validation Error'

}

const onObjectParameterError = (err) => {

    //* Typical message: `{ ObjectParameterError: Parameter "obj" to Document() must be an object`
    //* This is usually caused when the param passed to mongoose that is NOT an object.
    //* For example, PatientModel(some_string) instead of PatientModel({})

    if (err?.message) return new Error(err.message)
    else return 'Error: Unknown Validation Error'

}