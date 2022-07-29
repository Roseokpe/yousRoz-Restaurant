import './style.css';

const api = 'https://picsum.photos/v2/list';

const listContainer = document.querySelector('.list-container');

const createPictures = (apiInput) => {
  const info = `    <div class="item-1"><div class="item-image"> 
  <a class="img-div" id ="${apiInput.id} href="#displaypictures"><img src="${apiInput.download_url}" alt=""></a>
  </div>
  <div class="description">
    <h2 class="post-tittle" id="${apiInput.id}">${apiInput.author}</h2> 
  </div>
  <br>  
  <div class="buttons"> 
    <p><a class="like-icon"><i class="fa-regular fa-heart" id="${apiInput.id}"></i></a></p>
    <button class="btn " id="${apiInput.id}" type="button">comment</button>
  </div>`;
  listContainer.insertAdjacentHTML('beforeend', info);
};
const fetchData = async () => {
  const response = await fetch(api);
  const data = await response.json();
  data.forEach((input) => {
    createPictures(input);
  });
};

fetchData();