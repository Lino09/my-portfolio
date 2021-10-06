const projects = [
  {
    title: 'Placesplit Real Estate Agency',
    img: './assets/screenshots/placesplit.png',
    description: 'Placesplit description Placesplit description  Placesplit description  Placesplit description  Placesplit description  Placesplit description  Placesplit description  Placesplit description  Placesplit description  Placesplit description  Placesplit description  Placesplit description  Placesplit description  Placesplit description  Placesplit description',
    listOfTechnologies: ['Nuxt', 'Mailisearch', 'Laravel', 'Docker'],
    liveUrl: 'https://test.placesplit.com',
    githubUrl: 'https://www.github.com/Lino09',
  },
  {
    title: 'Wootbit Software Developer Agency',
    img: './assets/screenshots/wootbit-io.png',
    description: 'Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description Wootbit description ',
    listOfTechnologies: ['Vue', 'ElasticSearch', 'Laravel', 'pm2'],
    liveUrl: 'https://www.wootbit.io',
    githubUrl: 'https://www.github.com/Lino09',
  },
];

const cardSection = document.querySelector('.second');

for (let i = 0; i <= 2; i += 1) {
  let cards = '';
  let index = 1;
  Object.keys(projects).forEach((project) => {
    cards += `<div class="card"><img src="./assets/screenshots/placesplit.png" alt="test.placesplit.com"><h3>${projects[project].title}</h3><ul><li>Vue</li><li>Nuxt</li><li>Laravel</li><li>MailiSearch</li></ul><button  class="popup-toggle project-${index}" type="button">See Project</button></div>`;
    index += 1;
  });
  cardSection.innerHTML += cards;
  cards = '';
  index = 1;
}

const mobileMenu = document.querySelector('.menu-mobile');
const menuToggler = document.querySelectorAll('.menu-toggle');
const mobileAnchor = document.querySelectorAll('.mobile-anchor');
const popUpWindow = document.querySelector('.popup-project-overlay');
const popUpToggle = document.querySelectorAll('.popup-toggle');

// Mobilr menu logic

function toggleMenu() {
  mobileMenu.classList.toggle('no-display');
}

menuToggler.forEach(
  (el) => el.addEventListener('click', toggleMenu),
);

mobileAnchor.forEach(
  (el) => el.addEventListener('click', toggleMenu),
);

// Pop-up Window
function hydrate(project) {
  document.querySelector('.popup-title').innerHTML = projects[project].title;
  document.querySelector('.popup-text').innerHTML = projects[project].description;
  document.querySelector('.popup-image').src = projects[project].img;
  document.querySelector('.live').href = projects[project].liveUrl;
  document.querySelector('.code').href = projects[project].githubUrl;

  let list = '';
  projects[project].listOfTechnologies.forEach(
    (listItem) => {
      list += `<li>${listItem}</li>`;
    },
  );
  document.querySelector('.popup-list').innerHTML = list;
}

function togglePopUp(evt) {
  if (evt.currentTarget.classList.contains('project-1')) {
    hydrate(0);
  } else if (evt.currentTarget.classList.contains('project-2')) {
    hydrate(1);
  }
  popUpWindow.classList.toggle('no-display');
}

popUpToggle.forEach((el) => el.addEventListener('click', togglePopUp));