/* eslint-disable no-unused-vars */
const vowelsCount = function(string) {
    let letters = string.split('')
    // abc
    //[a, b, c]
    let vowelObject = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
        total: 0
    }
    


    return letters.reduce((accumulator, letter) => {
       //if letter exists in accumultor object add 1
       letter = letter.toLowerCase();
       if (accumulator[letter] !== undefined) {
           accumulator[letter] += 1
           accumulator.total += 1
       }
       return accumulator;
    }, vowelObject)
}