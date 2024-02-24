const submitButton = document.querySelector('.contact__button');
const inputName = document.querySelector('.contact__input[name="name"]');

// submitButton?.addEventListener('click', (event) => {
// //   const shouldSumbit = confirm('Are you sure you want to submit');

//   if (shouldSumbit === false) {
//     console.log('Submit button did not run');
//     // event.preventDefault();
//   }
// });

inputName?.addEventListener('keydown', (event) => {
  console.log(event.key);
  if (event.key === '_') {
    console.log('xyz');
    // return false;
    event.preventDefault();
  }
});

inputName?.addEventListener('focus', () => {
  inputName.classList.add('border-blue');
});

inputName?.addEventListener('blur', () => {
  inputName.classList.remove('border-blue');
  inputName.classList.add('border-red');
});

//--

const toggleLabel = document.querySelector('.toggle__label');

toggleLabel?.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.currentTarget.click();
  }
});
