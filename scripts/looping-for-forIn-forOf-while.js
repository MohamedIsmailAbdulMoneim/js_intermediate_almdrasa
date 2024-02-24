const numbers = [1, 2, 3, 4, 5];

// Sum numbers
let count = 0;

for (let i = 0; i < numbers.length - 1; i++) {
  count += numbers[i];
}

/* For In */
const obj = {
  name: 'Mohamed',
  age: 10,
};

for (const key in obj) {
  console.log(obj[key]);
}
// Object.keys(obj).map((key) => console.log(obj[key]));

/* For Of */
for (const item of numbers) {
  console.log(item);
}
// numbers.forEach((item) => console.log(item));

/* While */
let count2 = 0;
while (count2 < 0) {
  console.log(`${count2} from While`);
  count2++;
}

/* Do While */
let count3 = 0;
do {
  console.log(`${count3} from Do While`);
  count3++;
} while (count3 < 0);
