const skillsH2 = document.querySelector('#skills .h2-heading');
const h2CBFunction = (event, msg) => {
//   event.stopPropagation();
  console.log(event.currentTarget);
  console.log(msg);
};

const windowCBFunction = (event, msg) => {
  console.log(event.currentTarget);
  console.log(msg);
};

skillsH2.addEventListener('click', (event) => h2CBFunction(event, 'You clicked H2 inside Skills section'));
window.addEventListener('click', (event) => windowCBFunction(event, 'You clicked Window'), {
  capture: true,
});
