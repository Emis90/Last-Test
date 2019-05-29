/* eslint-disable no-unused-vars */
function aQuarter(func) {
   let count = 1

   return function() {
     if (count < 4) {
         count ++
         return 'something went wrong :/'
     } else if (count === 4) {
         count = 1
         return func(...arguments)
     }
   }
}

// This all looks really good - KH
