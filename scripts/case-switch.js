// const today = new Date().getDay();
const today = 7;

if (today === 0) {
  console.log('It\'s Sunday');
} else if (today === 1) {
  console.log('It\'s Monday');
} else if (today === 2) {
  console.log('It\'s Tuesday');
} else if (today === 3) {
  console.log('It\'s Wednesday');
} else if (today === 4) {
  console.log('It\'s Thursday');
} else if (today === 5) {
  console.log('It\'s Friday');
} else if (today === 6) {
  console.log('It\'s Saturday');
} else {
  console.log('Number is out of range');
}

switch (today) {
  case 0:
    console.log('It\'s Sunday');
    break;
  case 1:
    console.log('It\'s Monday');
    break;
  case 2:
    console.log('It\'s Tuesday');
    break;
  case 3:
    console.log('It\'s Wednesday');
    break;
  case 4:
    console.log('It\'s Thursday');
    break;
  case 5:
    console.log('It\'s Friday');
    break;
  case 6:
    console.log('It\'s Saturday');
    break;
  default:
    console.log('Number is out of range');
}
