import {postPhoto} from './data.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');

const renderThumbnails = postPhoto;

const picturesListThumbnails = document.createDocumentFragment();

renderThumbnails.forEach(({url, comments, likes}) => {
  const pictureElement = templatePicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  picturesListThumbnails.appendChild(pictureElement);
});

picturesList.appendChild(picturesListThumbnails);

export {picturesList};
