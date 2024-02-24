const createNewElement = (tag, className, text, dataName) => {
  const newElement = document.createElement(tag);

  newElement.classList.add(className);

  if (text) {
    newElement.innerText = text;
  }

  if (dataName) {
    newElement.dataset.name = dataName;
  }

  return newElement;
};

const li = createNewElement('li', 'skills__column', undefined, 'typescript');
const h2 = createNewElement('h2', 'skills__title', 'Eslint');
const span = createNewElement('span', 'skills__years', '2 years');

li.appendChild(h2);
li.appendChild(span);

const jsElement = document.querySelector('[data-name=Javascript]');
console.log(jsElement);

jsElement?.insertAdjacentElement('afterend', li);
