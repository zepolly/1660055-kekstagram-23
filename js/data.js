import {getRandomNumber} from './util.js';

const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;
const POST_PHOTO_NUMBER = 25;
const MIN_COMMENT_NUMBER = 1;
const MAX_COMMENT_NUMBER = 5;
const MIN_LIKES_NUMBER = 15;
const MAX_LIKES_NUMBER = 200;

const DESCRIPTIONS_PHOTO = [
  'Это просто я',
  'Это моя семья',
  'Это мой кот',
  'Это мой пес',
  'Это моя сестра',
  'Это мой брат',
  'Это мой отец',
  'Это моя мать',
  'Это мой племянник',
  'Это моя племянница',
  'Это мой стол',
  'Это моя работа',
  'Это мой пруд',
  'Это мой единственный подписчик',
  'Это я читаю',
  'Это я занимаюсь спортом',
  'Это я гуляю',
  'Это красивый цветок',
  'Это мой завтрак',
  'Это мой обед',
  'Это мой ужин',
  'Это моя спальня',
  'Это моя машина',
  'Это моя дача',
  'Это мой единственный подписчик отписался от меня',
];

const COMMENTS_LIST = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Екатерина',
  'Александра',
  'Арсений',
  'Виктор',
  'Гаджи',
];

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createComments = (index) => ({
  return: {
    id: index,
    avatar: `img/avatar${getRandomNumber(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER)}.svg`,
    message: getRandomArrayElement(COMMENTS_LIST),
    name: getRandomArrayElement(NAMES),
  },
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS_PHOTO),
  likes: getRandomNumber(MIN_LIKES_NUMBER, MAX_LIKES_NUMBER),
  comments: new Array(getRandomNumber(MIN_COMMENT_NUMBER, MAX_COMMENT_NUMBER)).fill(null).map((item, idx) => createComments(idx + 1)),
});

new Array(getRandomNumber(POST_PHOTO_NUMBER)).fill(null).map((item, index) => createPhoto(index + 1));
