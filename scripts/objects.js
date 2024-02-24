name = 'Mohamed';
const lastName = 'Ahmed';

// const obj = Object.freeze({
//   name, // name:name
//   lastName,
//   experience: 10,
//   [lastName]: 'xyz',
//   'military-service': true,
//   skills: Object.freeze({
//     skill1: 'HTML',
//     skill2: 'CSS',
//   }),
// });

const obj = {
  name, // name:name
  lastName,
  experience: 10,
  [lastName]: 'xyz',
  'military-service': true,
  skills: {
    skill1: 'HTML',
    skill2: 'CSS',
  },
};

obj.nickName = 'MA';
obj.nickName = 'ME';
obj.experience = '8';

obj['military-service'] = false;
obj.Mohamed = 'XOXO';
obj.nickname = false;

console.log(obj?.xyz?.xoxo); // optional chaining

delete obj.experience;

// if (obj && obj.xyz && obj.xyz.xoxo) {
//   console.log(obj.xyz.xoxo);
// }

console.log(obj);
