
import { url, modal, overlay, involvmentAPI } from './variables.js';

const popupArray = [52802, 52815, 52835, 52896, 52903, 52906];

export const getComments = async (i) => {
  const response = await fetch(`${involvmentAPI}/apps/wC4fHH83VpkiJclfAEX8/comments?item_id=${+i}`);
  const data = await response.json();
  const arr = Array.from(data);

  const commentContainer = modal.querySelector('.all-comments');
  const commentsCounter = modal.querySelector('.comments-counter');
  commentsCounter.innerHTML = `(${arr.length})`;
  commentContainer.innerHTML = arr
    .map(
      (comment) => `
    <p class="popup-comment"><span>${comment.creation_date}    </span><span>${comment.username}:  </span><span>${comment.comment}</span></p>
    `,
    )
    .join('');
};

export const postComments = async (i, comment) => {
  await fetch(`${involvmentAPI}/apps/wC4fHH83VpkiJclfAEX8/comments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(comment),
  });
  getComments(i);
};

const displayPopup = async (i) => {
  const fetchData = await fetch(`${url}/lookup.php?i=${popupArray[i]}`);
  const data = await fetchData.json();
  modal.classList.add('open');
  overlay.classList.add('open');

  modal.innerHTML = data.meals
    .map(
      (meal) => `<div class="popup-container">
      <i class="fas fa-times-circle icon"></i>
    <img class="popup-img" src="${meal.strMealThumb}">
  <h3 class="popup-meal">${meal.strMeal}</h3>
  <div class="popup-grid">
    <p class="popup-meal-details">Category: "${meal.strCategory}"</P>
    <p class="popup-meal-details">Country: "${meal.strArea}"</P>
    <p class="popup-meal-details">Prep: <a href="${meal.strYoutube}">Watch video</a></P>
</div>
      <div id="${i}" class="comments-header"><h2>Comments <span class="comments-counter"></span></h2></div>
      <div class="all-comments">
      </div>
      <h2 class="add-comments-header">Add a comment</h2>
      <form class="comments-form">
  <input type="text" id="name" name="name" minlength="2" maxlength="10" placeholder="Enter you name" class="comment-name-input" required>
  <textarea id="textarea" name="textarea" maxlength="50" placeholder="Enter comment" class="comment-text-input" required></textarea>
  <input type="submit" value="Comment" class="form-btn">
  </form>
  </div>`,
    )
    .join('');
};

function closeModal() {
  modal.classList.remove('open');
  overlay.classList.remove('open');
}

overlay.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (!e.target.matches('.icon')) return;
  closeModal();
});

export default displayPopup;
