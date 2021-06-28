import {isEscEvent} from './util.js';
import {postPhoto} from './data.js';
import {picturesList} from './mini-photo.js';

const body = document.querySelector('body');
const block = document.querySelector('.big-picture');
const previewPicture = block.querySelector('.big-picture__img').querySelector('img');
const photoLikes = block.querySelector('.likes-count');
const photoCommentsCount = block.querySelector('.comments-count');
const photoDescription = block.querySelector('.social__caption');
const photoListComments = block.querySelector('.social__comments');
const buttonClose = block.querySelector('.big-picture__cancel');
const blockCommentsCount = block.querySelector('.social__comment-count');
const buttonUploadedComments = block.querySelector('.comments-loader');
const pictures = document.querySelectorAll('.picture');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const COMMENT_STEP = 5;
let lastShownIndex = 0;

const onPreviewEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    block.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const showComments = () => {
  const comments = photoListComments.children;
  const commentsCount = photoListComments.children.length;
  const nextIndex = (commentsCount > lastShownIndex + COMMENT_STEP) ? lastShownIndex + COMMENT_STEP : commentsCount;
  for (let index = lastShownIndex; index <= nextIndex - 1; index++) {
    comments[index].classList.remove('hidden');
  }
  buttonUploadedComments.classList.toggle('hidden', commentsCount === nextIndex);
  blockCommentsCount.firstChild.textContent = `${nextIndex} из `;
  lastShownIndex = nextIndex;
};

const openPreviewBlock = () => {
  block.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPreviewEscKeydown);
  buttonUploadedComments.addEventListener('click', showComments);
};

const closeWindow = () => {
  block.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPreviewEscKeydown);
  buttonUploadedComments.removeEventListener('click', showComments);
};

buttonClose.addEventListener('click', () => {
  closeWindow();
});

const renderComments = (comments) => {
  for (let index = 0; index <= comments.length-1; index++) {
    const {avatar, name, message} = comments[index];
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    commentElement.classList.add('hidden');
    photoListComments.appendChild(commentElement);
  }
};

picturesList.addEventListener('click', (evt) => {
  const pictureElement = evt.target.closest('.picture');
  if (pictureElement) {
    openPreviewBlock();
    const index = Array.from(pictures).findIndex((elem) => elem === pictureElement);
    const photoInfo = postPhoto[index];
    const {url, likes, comments, description} = photoInfo;
    previewPicture.src = url;
    photoLikes.textContent = likes;
    photoCommentsCount.textContent = comments.length;
    photoDescription.textContent = description;
    photoListComments.innerHTML = '';
    renderComments(comments);
    lastShownIndex = 0;
    showComments();
  }
});
