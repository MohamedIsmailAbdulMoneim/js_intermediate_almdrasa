/*eslint-disable */
const fruits = ['apple', 'banana', 'orange', 'avocado'];

// Log current fruit in the array ✅
// fruits.forEach((item) => console.log(`Currrent Fruit is: ${item}`));

// Log next fruit in the array ✅
// Log previous fruit in the array ✅
// Log "Hi" at the beginning ✅
// Log "Bye" at the end ✅
/*
fruits.forEach((item, index, arr) => {
  if (arr[index - 1] === undefined) {
    console.log('Hi');
  } else {
    console.log(`Next Fruit is: ${arr[index - 1]}`);
  }

  console.log(`Currrent Fruit is: ${item}`);

  if (arr[index + 1] === undefined) {
    console.log('Bye');
  } else {
    console.log(`Next Fruit is: ${arr[index + 1]}`);
  }

  console.log('---------------');
});
*/

// Refactor version
const logFruit = (item, index, arr) => {
    (!arr[index - 1]) ? console.log('Hi') : console.log(`Next Fruit is: ${arr[index - 1]}`);
  
    console.log(`Currrent Fruit is: ${item}`);
  
    (!arr[index + 1]) ? console.log('Bye') : console.log(`Next Fruit is: ${arr[index + 1]}`);
  
    console.log('---------------');
  }

fruits.forEach(logFruit);
