const skillsH2 = document.querySelector('#skills .h2-heading');
const btnCBFunction = (e) => {
  console.log(e);
};

skillsH2.addEventListener('click', btnCBFunction);

//--

const skillsList = document.querySelectorAll('.skills__column');
const cbFunction = (event, item) => {
  if (event.currentTarget.dataset.name === 'HTML') {
    console.log("I won't work");
    return false;
  }

  const activeElement = document.querySelector('.underline');

  console.log(event.currentTarget.dataset.name);
  if (activeElement) {
    activeElement.classList.remove('underline');
  }

  item.classList.add('underline');
};

skillsList.forEach((item) => {
  item.addEventListener('click', (event) => cbFunction(event, item));
});
