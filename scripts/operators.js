const fname = 'mohamed';
const lname = 'ahmed';
const isMohamedAhmed = (fname === 'mohamed' && lname === 'ahmed');
const isAhmed = fname === 'ahmed';

if (isMohamedAhmed || isAhmed) {
  console.log("It's true");
} else {
  console.log('You are not allowed');
}
