/* eslint-disable no-unused-vars */

//The `alternate` function returns function that 
//returns a value every other time it is called.
const alternate = function(func) {
   let once = true;
//specs are confusing :(

   return () => {
      if (once === true) {
        once = false;
        return func()
      } else {
        once = true;
      }
   }
}


const twice = (func) => {
let count = 0
  return function() {
      if (count < 2) {
          count += 1
          //return func if hasnt been called twice
          return func()
      } else {
        return 0
      }
   count = 0;//set to 0 to restart?
  }
}