/*eslint-disable*/
import '@babel/polyfill';

const hamburger = document.querySelector('.hamburger');
const headerIcons = document.querySelector('.header-icons');
const icons = document.querySelectorAll('.nav-link');
const favourite = document.querySelectorAll('#heart');
const info = document.querySelectorAll('#info');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    headerIcons.classList.toggle('open');
    icons.forEach((icon) => {
      icon.classList.toggle('fade');
    });
  });
}

if (favourite) {
  favourite.forEach((el) => {
    el.addEventListener('click', () => {
      let localData = JSON.parse(localStorage.getItem('fav'));
      let image_url, food_name;

      image_url = el.parentElement.parentElement
        .getElementsByTagName('img')[0]
        .getAttribute('src');
      food_name = el.parentElement.getElementsByTagName('p')[0].innerHTML;

      if (localData !== null && localData != undefined) {
        localData.favs.push({
          image_url,
          food_name
        });
        let jsonString = JSON.stringify(localData);
        localStorage.setItem('fav', jsonString);
      } else {
        let jsonString = JSON.stringify({
          image_url,
          food_name
        });
        localStorage.setItem('fav', `{"favs": [${jsonString}]}`);
      }
      // console.log(localData);
    });
  });
}

if (info) {
  info.forEach((el) =>
    el.addEventListener('click', () => {
      alert('info is clicked');
    })
  );
}
