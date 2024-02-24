// Coercion
// 5 == '5' => true;
// 5 + '5' = '55';
//---------
// Ternary
if (10 > 5) {
  console.log('Truthy condition');
} else {
  console.log('Falsy condition');
}

(-10 > 5) ? console.log('Truthy condition') : console.log('Falsy condition');

if (10 > 5) {
  console.log('Truthy condition');
}

(-10 > 5) && console.log('Truthy condition');
