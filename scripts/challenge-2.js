const skillsArray = [
  {
    name: "HTML",
    experience: "2013",
    type: "frontend",
  },
  {
    name: "CSS",
    experience: "2013",
    type: "frontend",
  },
  {
    name: "Javascript",
    experience: "2013",
    type: "frontend",
  },
  {
    name: "React",
    experience: "2016",
    type: "frontend",
  },
  {
    name: "Redux",
    experience: "2017",
    type: "frontend",
  },
  {
    name: "React Testing Library",
    experience: "2020",
    type: "frontend",
  },
  {
    name: "Node.js",
    experience: "2020",
    type: "bakend",
  },
  {
    name: "Express.js",
    experience: "2020",
    type: "backend",
  },
  {
    name: "Mongodb",
    experience: "2020",
    type: "backend",
  },
];

// Add skills dynamically
// Calculate years of experience automatically

const skillsSection = document.querySelector("#skills");
const currentYear = new Date().getFullYear();

const generateSkill = (item, curYear) => {
  const { name, experience, type } = item;
  console.log(experience);
  return `<li data-name="${name}" class="skills__column" data-type="${type}" data-name="${name}">
  <h2 class="skills__title">${name}</h2>
  <span class="skills__years">${curYear - experience} years</span>
  </li>`;
};

const lisString = skillsArray
  .map((item) => generateSkill(item, currentYear))
  .join("");

const ul = `<ul class="skills__list">${lisString}</ul>`;

skillsSection.insertAdjacentHTML("beforeend", ul);

/* ✨ Bonus ✨ */
// Add filters to skills section
document.querySelectorAll(".skills__button").forEach((element) => {
  element.addEventListener("click", () => {
    document
      .querySelector(".skills__button--isActive")
      .classList.remove("skills__button--isActive");
    element.classList.add("skills__button--isActive");
    document.querySelector(
      ".skills__list"
    ).classList = `skills__list ${element.dataset.type}`;
  });
});
