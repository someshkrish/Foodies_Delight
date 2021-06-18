/*eslint-disable*/

const hamburger = document.querySelector('.hamburger');
const headerIcons = document.querySelector('.header-icons');
const icons = document.querySelectorAll('.nav-link');
const searchIcon = document.querySelector('.search-icon');
const axios = require('axios');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    headerIcons.classList.toggle('open');
    icons.forEach((icon) => {
      icon.classList.toggle('fade');
    });
  });
}

if (searchIcon) {
  searchIcon.addEventListener('click', () => {
    const query = document.getElementById('search-box').value;

    if (!query) {
      alert('Please Enter The Dish You Want To Search...');
    } else {
      document.getElementById('search-box').value = '';

      const options = {
        method: 'GET',
        url: `https://tasty.p.rapidapi.com/recipes/list`,
        params: { from: '0', size: '20', tags: 'under_30_minutes', q: query },
        headers: {
          'x-rapidapi-key':
            '45123137dfmsh8dc2e63c8e22d07p1699cajsn62e17d80cb3f',
          'x-rapidapi-host': 'tasty.p.rapidapi.com'
        }
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  });
}
