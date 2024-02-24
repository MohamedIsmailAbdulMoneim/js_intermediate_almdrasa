// Create and array of fruits (apple, orange, banana, avocado)
// const fruits = ['apple', 'orange', 'banana', 'avocado'];
const fruits = Array.of('apple', 'orange', 'banana', 'avocado');
console.log(fruits);
// Create 10 unique IDs
const ids = Array.from({ length: 10 }, (item, indx) => console.log(`${indx}a`));
console.log(ids);

// Check for array type
const result = Array.isArray(fruits);
console.log(result);

// Access Object items
const obj = {
  name: 'mohamed',
  last: 'ahmed',
};
const item = [1, 2];
const [key, value] = item;
console.log({ key });
console.log({ value });
Object.entries(obj).forEach(([key, value]) => console.log(key));
console.log(Object.entries(obj));
