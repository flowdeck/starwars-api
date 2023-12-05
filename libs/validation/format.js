
module.exports = {

    //* A DateOnly string is in the format MM/DD/YYYY (requires 2 digits for month and day) and is a valid date
    isValidDateOnly(dateStr) {
        //* Fails if the date is not in the format MM/DD/YYYY (requires 2 digits for month and day, and 4 digits for year)
        if (!/\d\d[.\-/]\d\d[.\-/]\d{4}/.test(dateStr)) return false

        //* Convert string to Date object
        var date = new Date(dateStr)

        //* Fails if the date is not a valid date
        return (new Date(date) !== 'Invalid Date' && !isNaN(date) && date instanceof Date) ? true : false

    },

    //* Validate that a value contains only numeric digits and is exactly 10 digits long
    isPhoneValid(value) {
        //* is value 10 numeric digits (accepts string or number)
        return /^\d{10}$/.test(value)
    },

    //* Returns true if the string is a valid email address
    isEmailValid(str) {
        const regex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return regex.test(str)
    },

}

