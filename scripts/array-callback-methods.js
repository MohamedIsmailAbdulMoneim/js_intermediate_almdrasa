const candidates = [
  {
    id: 1,
    firstName: 'Mohamed',
    lastName: 'Ahmed',
    isGraduated: true,
    graduationYear: 2012,
  },
  {
    id: 2,
    firstName: 'Ahmed',
    lastName: 'Mohamed',
    isGraduated: true,
    graduationYear: 2010,
  },
  {
    id: 3,
    firstName: 'Mohamed',
    lastName: 'Zaki',
    isGraduated: true,
    graduationYear: 2009,
  },
  {
    id: 4,
    firstName: 'Mahmoud',
    lastName: 'Sayed',
    isGraduated: false,
  },
  {
    id: 5,
    firstName: 'Ahmed',
    lastName: 'Ragab',
    isGraduated: true,
    graduationYear: 2017,
  }];

// Find person with id=1
const findResult = candidates.find((item) => (item.id === 4));
// const result = candidates.findIndex((item) => item.id === 4);
console.log(findResult);

// Get all graduated people (before 2015)
const filterResult = candidates.filter((item) => item.isGraduated && item.graduationYear <= 2015);
console.log(filterResult);

// Check if anyone graduated before 2005
const someResult = candidates.some((item) => item.graduationYear <= 2005);
console.log(someResult);

// Check if all the candidates are graduated
const everyResult = candidates.every((item) => item.graduationYear <= 2005);
console.log(everyResult);

// Sort people by graduation year
const shallowCandidates = [...candidates];
shallowCandidates.sort((a, b) => { // mutable
  if (!a.graduationYear) {
    return 1;
    // a.graduationYear = Infinity;
  }
  if (!b.graduationYear) {
    return -1;
    // b.graduationYear = Infinity;
  }
  return a.graduationYear - b.graduationYear;
});
console.log(shallowCandidates);

// Sort people alphapitically
const shallowCandidates2 = [...candidates];
shallowCandidates2.sort((a, b) => a.firstName.localeCompare(b.firstName));
console.log(shallowCandidates2);
