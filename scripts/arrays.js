const skillsObj = { 1: 'HTML', 2: 'CSS', 3: 'JS' };
const skillsArr = ['HTML', 'CSS', 'JS', 'HTML', 'CSS', 'JSSS'];
const numArr = [1, 2, 3, 4, 5, 6];

// console.log(skillsObj['1']);
// console.log(skillsArr[skillsArr.length - 1]);
// obj = {};
// arr= [];
// console.log(skillsArr);

/* Mutable */
// const numbersBackward = numArr.reverse();
// console.log(numArr);
// console.log(numbersBackward);

/* Immutable */
// const slice = numArr.slice(2, 4);
// const numbersBackward = [...numArr].reverse();
// console.log(numArr);
// console.log(numbersBackward);

// --------

// skillsArr.push('Typescript'); // Mutable
// const newSkillsArr = [...skillsArr, 'Typescript']; // Immutable

// skillsArr.unshift('Typescript'); // Mutable
// const newSkillsArr = ['Typescript', ...skillsArr]; // Immutable

// skillsArr[2] = 'Javascript'; // Mutable
// const newSkillsArr = [...skillsArr.slice(0, 2), 'Javascript', ...skillsArr.slice(3)]; // Immutable

// skillsArr.splice(1, 2); // Mutable
const newSkillsArr = [...skillsArr.slice(0, 1), ...skillsArr.slice(3)]; // Immutable

console.log(skillsArr);
console.log(newSkillsArr);
