const fruits = ['apple', 'banana', 'orange', 'avocado'];

// Join array values into one string with "-" separator
const joinedFruits = fruits.join(' - '); // Immutable
console.log(joinedFruits);

// Convert string into array
const splittedFruits = joinedFruits.split(' - '); // Immutable
console.log(splittedFruits);

// Grap the last item in the array and remove it
const poppedValue = fruits.pop(); // mutable
console.log(fruits);
console.log(poppedValue);

// Push item to the end of the array
fruits.push('avocado'); // mutable
console.log(fruits);

// Grap the first item in the array and remove it
const shiftedItem = fruits.shift();
console.log(shiftedItem);
console.log(fruits);

// Push item to the start of the array
const unshifftedValue = fruits.unshift('apple'); // mutable
console.log(unshifftedValue);
console.log(fruits);
