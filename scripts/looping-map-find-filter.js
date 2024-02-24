const people = ['mohamed', 'ahmed', 'hossam'];

// Add "Basha" word to the names array ✅
/*
const newNames = [];
people.forEach((item) => newNames.push(`${item} Basha`));
*/
const newNames = people.map((item) => `${item} Basha`);
console.log(newNames);

// Capitalize first char in those words ✅
const capitalizedNames = newNames.map((name) => `${name[0].toUpperCase()}${name.slice(1)}`);
console.log(capitalizedNames);

// Give each employee a unique Id & birthdate property ✅
const empolyeesObject = capitalizedNames.map((name, index) => ({ id: index, name, birthdate: 2000 + index }));
console.log(empolyeesObject);

// Calculate employees age from thier birthdate
const employeesWithAge = empolyeesObject.map((person) => {
  const currentYear = new Date().getFullYear();
  person.age = currentYear - person.birthdate;
  return person;
});
console.log(employeesWithAge);

// Combine previous solutions (Refactoring)
const newEmployeesArray = people.map((name, index) => {
  const currentYear = new Date().getFullYear();
  const year = 1995;

  return {
    id: index,
    name: `${name[0].toUpperCase()}${name.slice(1)} Basha`,
    birthdate: year + index,
    age: currentYear - year + index,
  };
});
console.log(newEmployeesArray);

// Find an employee with specific Id
const findEmployee = (id) => {
  const result = newEmployeesArray.find((employee) => employee.id === id);

  if (!result) {
    return 'There is no employee with this Id';
  }

  return result;
};

console.log(findEmployee(2));

// Filter people with age more than 29

const employeesOlderThan29 = newEmployeesArray.filter((employee) => employee.age >= 29);
console.log(employeesOlderThan29);
