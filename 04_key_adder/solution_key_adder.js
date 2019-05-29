/* eslint-disable no-unused-vars */

/* The arrow function problem is a common one here - don't worry! The fact that you caught it is wonderful; it means you're getting comfortable with ES6 - KH */
const keyAdder = function(){  //used arrow function first and NO SPECS WOULD POASS.... what a waste of my time T.T :(
  let keys = Object.keys(this)


  return keys.filter(key => typeof this[key] === 'number')
             .reduce((accumulator, value) => accumulator + this[value],0)
             ///////whyyyyyyyyyyy isnt it working!!!!

}
