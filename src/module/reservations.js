import { resModal, url } from './variables.js';

const divList = [];
const popupArray = [52802, 52815, 52835, 52896, 52903, 52906];
let user; let start; let end; let containerRes; let
  header;
const getUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wC4fHH83VpkiJclfAEX8/reservations?item_id=1';

const postUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wC4fHH83VpkiJclfAEX8/reservations';

export const displayReservations = async () => {
  if (divList.length > 0) {
    const items = document.querySelectorAll('.comment');
    items.forEach((item) => {
      item.remove();
    });
  }

  const getReservations = async () => {
    const response = await fetch(getUrl);
    const data = await response.json();
    return data;
  };

  const reservations = await getReservations();
  for (let i = 0; i < reservations.length; i += 1) {
    const paragraph = document.createElement('p');
    paragraph.classList.add('comment');
    paragraph.innerHTML = `${reservations[i].date_start} - ${reservations[i].date_end} by ${reservations[i].username}`;
    containerRes.appendChild(paragraph);
    divList.push(paragraph);
  }
  header.innerHTML = `Reservations(${reservations.length})`;
};

const reserveMeal = async () => {
  if (user.value === '' && start.value === '' && end.value === '') {
    return;
  }
  if (user.value === '') {
    return;
  }
  if (start.value === '') {
    return;
  }
  if (end.value === '') {
    return;
  }
  const reservData = {
    item_id: 1,
    username: user.value,
    date_start: start.value,
    date_end: end.value,
  };
  const response = await fetch(postUrl, {
    method: 'POST',
    body: JSON.stringify(reservData),
    headers: {
      'content-type': 'application/json',
    },
  });

  const data = await response.json();

  if (data.success) {
    alert('Reservation Successful');
  }

  displayReservations();
  user.value = '';
  start.value = '';
  end.value = '';
};

const remove = () => {
  const divContainer = document.querySelector('.modal-container');
  divContainer.remove();
  resModal.classList.remove('show');
};

export const reservPop = async (e) => {
  const item = e.target;
  const myId = item.id;
  const fetchData = await fetch(`${url}/lookup.php?i=${popupArray[myId]}`);
  const data = await fetchData.json();
  const meal = data.meals;
  const container = document.createElement('div');
  container.classList.add('modal-container');
  container.innerHTML = `
    <div class="image-div">
      <img src="${meal[0].strMealThumb}" alt="meal-img" class="pop" />
      <i class="fa-solid fa-xmark"></i>
    </div>
    <h1 class="pop-header">${meal[0].strMeal}</h1>
    <div class="description">
      <div class="desc1">
        <p>Dish category : ${meal[0].strCategory}</p>
        <p class='country'>Country : ${meal[0].strArea}</p>
      </div>
      <div class="desc2">
        <p>Video Link : <a href="${meal[0].strYoutube}" class='video-link'>Watch here</a></p>
      </div>
    </div>
    <div class="reserves">
    <h2 class="comments"></h2>
    </div>
    <div class="add-comment">
      <h2 class="add-header">Add a Reservation</h2>
      <div class="form">
        <input type="text" class="name user" placeholder="Your name"/>
        <input type="text" class="name start" placeholder="Start date"/>
        <input type="text" class="name end" placeholder="End date"/>
        <button class="addReserve-btn">Reserve</button>
      </div>
    </div>`;
  resModal.appendChild(container);
  resModal.classList.add('show');
  const removeBtn = document.querySelector('.fa-xmark');
  const reserve = document.querySelector('.addReserve-btn');
  removeBtn.addEventListener('click', remove);
  reserve.addEventListener('click', reserveMeal);
  user = document.querySelector('.user');
  start = document.querySelector('.start');
  end = document.querySelector('.end');
  containerRes = document.querySelector('.reserves');
  header = document.querySelector('.comments');

  displayReservations();
};
