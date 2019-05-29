/* eslint-disable no-unused-vars */
// Checkpoint solutions: https://gist.github.com/ScottDalessandro/1869a929442c760fb3c1ba293e15b1aa

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

// Great job here! Nice use of reduce - KH
