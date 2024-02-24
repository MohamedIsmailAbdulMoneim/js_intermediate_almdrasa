const skillsH2 = document.querySelector('#skills .h2-heading');
const bioHeading = document.querySelector('.bio__heading');
const btnCBFunction = () => alert('You clicked me');

skillsH2.addEventListener('click', btnCBFunction);
bioHeading.addEventListener('click', btnCBFunction);
// bioHeading?.removeEventListener('click', btnCBFunction);

//---

const skillsList = document.querySelectorAll('.skills__column');
const cbFunction = (item) => {
  const activeElement = document.querySelector('.underline');

  if (activeElement) {
    activeElement.classList.remove('underline');
  }

  item.classList.add('underline');
};

skillsList.forEach((item) => {
  item.addEventListener('click', () => cbFunction(item));
});
