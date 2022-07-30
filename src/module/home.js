import { url, displayHome } from './variables.js';
import { reservPop } from './reservations.js';
import { createLike, getLikes } from './likes.js';

export const likesCount = (target, likesArray, numOfLikes) => {
  likesArray.forEach((obj) => {
    if (obj.item_id === target.id) {
      numOfLikes.innerHTML = `${obj.likes} likes `;
    }
  });
};

const pasteLike = async (item, paragraph) => {
  if (paragraph === undefined) {
    const paragraph = document.querySelectorAll('.like-show');
    const getAllLikes = await getLikes();
    getAllLikes.forEach((like) => {
      if (like.item_id === item) {
        paragraph.forEach((card) => {
          if (card.id === item) {
            card.innerHTML = `${like.likes}`;
          }
        });
      }
    });
  }
};

const display = async () => {
  let id = 0;
  const fetchData = await fetch(`${url}/search.php?f=f`);
  const data = await fetchData.json();
  const num = data.meals.slice(0, 6).length;
  console.log(num);
  const counter = document.querySelector('#homeCount');
  counter.textContent = `Total Meals ${num}`;
  displayHome.innerHTML = data.meals
    .slice(0, 6)
    .map(
      (meal, id) => `<div id="${id}">
  <img src="${meal.strMealThumb}">
  <span class="meals">${meal.strMeal}</span>
  <i class="fa fa-thumbs-up" id=${meal.idMeal}></i><p class="like-show" id=${meal.idMeal}></p>
  <br>
  <button id="${id}" class="popup-btn">Comments</button>
  <button id="${id}" class="reservation-btn">Reservations</button>
  </div>`,
      (id += 1),
    )
    .join('');
  const reservationBtns = document.querySelectorAll('.reservation-btn');
  reservationBtns.forEach((btn) => {
    btn.addEventListener('click', reservPop);
  });

  const likeShow = document.querySelectorAll('.fa-thumbs-up');
  likeShow.forEach((like) => {
    pasteLike(like.id);
    like.addEventListener('click', async () => {
      console.log(like.id);
      await createLike(like.id);

      pasteLike(like.id);
    });
  });
};

window.addEventListener('load', display);

export default display;