/*eslint-disable*/
import '@babel/polyfill';
import { recipeCalling } from './recipes';

const axios = require('axios');

const hamburger = document.querySelector('.hamburger');
const headerIcons = document.querySelector('.header-icons');
const icons = document.querySelectorAll('.nav-link');
const searchIcon = document.querySelector('.search-icon');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    headerIcons.classList.toggle('open');
    icons.forEach((icon) => {
      icon.classList.toggle('fade');
    });
  });
}

if (searchIcon) {
  searchIcon.addEventListener('click', async () => {
    const query = document.getElementById('search-box').value;

    if (!query) {
      alert('Please Enter The Dish You Want To Search...');
    } else {
      document.getElementById('search-box').value = '';
      await recipeCalling(query);
    }
  });
}
