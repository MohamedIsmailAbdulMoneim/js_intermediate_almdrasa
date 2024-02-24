/* eslint-disable */

// Sum all numbers
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumlator, currentValue) => {
    return accumlator + currentValue;
}, 10)

console.log(sum);

let count=10;
numbers.forEach(number => {
    count += number;
})

console.log({count});


// Find the longest word
const fruits = ['apple', 'banana', 'avocado', 'orange'];
const longestWord = fruits.reduce((accumlator,currentValue) => {
    if(accumlator.length > currentValue.length){
        return accumlator
    }
    return currentValue
    // return accumlator.length > currentValue.length ? accumlator:currentValue
}, '')

console.log(longestWord);