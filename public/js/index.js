/*eslint-disable*/
import '@babel/polyfill';

const hamburger = document.querySelector('.hamburger');
const headerIcons = document.querySelector('.header-icons');
const icons = document.querySelectorAll('.nav-link');
const favourite = document.querySelectorAll('#heart');
const favSection = document.querySelector('.favourite-section');

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
      let localDataString = localStorage.getItem('fav');
      let localData = JSON.parse(localDataString);
      let image_url, food_name, recipe_id;

      image_url = el.parentElement.parentElement
        .getElementsByTagName('img')[0]
        .getAttribute('src');
      food_name = el.parentElement.getElementsByTagName('p')[0].innerHTML;
      recipe_id = el.parentElement
        .getElementsByTagName('a')[0]
        .getAttribute('href');

      const obj = { image_url, food_name, recipe_id };
      const objString = JSON.stringify(obj);

      if (localData !== null && localData != undefined) {
        if (!localDataString.includes(objString)) {
          localData.favs.push({
            image_url,
            food_name,
            recipe_id
          });
          localDataString = JSON.stringify(localData);
          localStorage.setItem('fav', localDataString);
          alert('Item Added To your Favourite List...');
        } else {
          alert('Item Is Already In Your Favourite Section...');
        }
      } else {
        let jsonString = JSON.stringify({
          image_url,
          food_name,
          recipe_id
        });
        localStorage.setItem('fav', `{"favs": [${jsonString}]}`);
        alert('Item Added To your Favourite List...');
      }
    });
  });
}

if (favSection) {
  const favItems = JSON.parse(localStorage.getItem('fav')).favs;
  let markup = '';

  favItems.forEach((item) => {
    markup += `<div class="card">
    <img src="${item.image_url}" alt="recipe-image" class="card-image" />
    <div class="card-details">
      <p>${item.food_name}</p>
      <img src="./Images/heart.png" alt="heart" class="card-footer-img" />
      <a href=${item.recipe_id}>
        <img src="./Images/info.png" alt="info" class="card-footer-img" />
      </a>
    </div>
  </div>`;
  });

  favSection.insertAdjacentHTML('afterbegin', markup);
}
