const condition1 = true;
const condition2 = true;

if (condition1) {
  console.log('condition 1 is true');
} else if (condition2) {
  console.log('condition 1 is false and condition 2 is true');
} else {
  console.log('condition 1 and condition 2 are false');
}

function capitalize(word, isUpperCase) {
  if (!isUpperCase) {
    return word.toUpperCase();
  }

  return word;
}

console.log(capitalize('mohamed', true));
