/* eslint-disable no-unused-vars */
const reduceRight = function(array, value, func) {
    for (let i = array.length - 1; i >= 0; i--) {
        value = func(value, array[i])
    }
    return value

}

// Looks great! Good job - KH
