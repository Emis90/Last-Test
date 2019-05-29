/* eslint-disable no-unused-vars */
function interleave(arguments) {
   let mixedString = ''
   arguments = [...arguments]
   for (let i = 0; i < arguments.length; i++) {
       let word = arguments[i];

   }
}


/////i have no idea what im doing....please help :/

/*
Good start here - There are a LOT of different ways to solve this problem, so feel free to experiment. One strategy could be:

1. Find your shortest word
2. Create a nested loop, adding [n] letter from each word to a new string
3. Add the remaining letters from your longer word to the end

Another solution could be:

1. Find your longest word
2. Create a nested loop (or use reduce() if you're feeling fun!) and add each [n] letter from each word (while they are available) to a new array and then join them into a string at the end.

There's really no wrong way to do this, and playing around with a couple of approaches will be a great practice of the skills you've built up to this point. Good luck! - KH
*/
