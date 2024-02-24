// Pass by value
let name1 = 'mohamed';
let name2 = 'mohamed';

// console.log(name1 === name2);

name2 = 'Ahmed';

// console.log(name1 === name2);

name2 = name1;
name1 = 'Zaki';

// console.log(name1 === name2);

// Pass by reference
const person1 = {
  name: 'mohamed',
  last: 'ahmed',
  skills: {
    skill1: 'HTML',
    skill2: 'CSS',
  },
};

let person2 = {};

console.log(person1 === person2);

// person1 = person2;
person2 = { ...person1, skills: { ...person1.skills } };
// person1 = Object.assign({}, person2)

console.log(person1 === person2);

person1.name = 'zaki';
person1.skills.skill1 = 'JS';

console.log(person1);
console.log(person2);

function mutate(data) {
  const temp = { ...data };
  console.log(temp);
  temp.name = 'XYZ';
  return temp;
}

// mutate(name1);
console.log(mutate(person1));
console.log(person1);
