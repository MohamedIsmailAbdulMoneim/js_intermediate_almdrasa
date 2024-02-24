const skill = 'Eslint';
const liElement = `<li data-name="Typescript" class="skills__column">
                        <h2 class="skills__title">${skill}</h2>
                        <span class="skills__years">2 years</span>
                    </li>`;

const liElement2 = document.createRange().createContextualFragment(liElement);
console.log(liElement2.querySelector('h2'));

const skillsList = document.querySelector('.skills__list');

// skillsList.innerHTML += liElement;
// skillsList?.insertAdjacentHTML('beforeend', liElement);
