/* eslint-disable no-unused-vars */

//The `alternate` function returns function that
//returns a value every other time it is called.
const alternate = function(func) {
   let once = true;
//specs are confusing :(
// Nice work! Great job perservering - I know sometimes they aren't the clearest - KH

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
	 // This will never run because you're returning before you get here, but it doesn't matter
	 // Your count variable will be reset whenever you call twice() - KH
  }
}

// Nice job here! Looking good! - KH
