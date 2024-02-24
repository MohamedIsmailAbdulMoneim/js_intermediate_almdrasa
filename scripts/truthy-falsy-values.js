/*
// Truthy
1
-1
Full string (even string of 0)
{}
[]

// Falsy
 0
 empty string
 undefined
 null
 NaN
 [].length
 Object.keys({}).length
*/

const condition = [];

if (condition.length) {
  console.log("It's Truthy");
} else {
  console.log("It's Falsy");
}
