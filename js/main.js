/* eslint-disable id-length */
function getRandomNumber (min, max) {
  if (min < 0) {
    throw new Error('Ошибка! Число должно быть положительным');
  }
  if (min > max) {
    throw new Error('Ошибка! Измените диапазон');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber(1, 45);

function checkMaxLengthString (line, maxLine) {
  return (line.length <= maxLine);
}
checkMaxLengthString('комментарий', 30);

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
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS_LIST),
    name: getRandomArrayElement(NAMES),
  },
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS_PHOTO),
  likes: getRandomNumber(15, 200),
  comments: new Array(getRandomNumber(1, 5)).fill(null).map((item, i) => createComments(i + 1)),
});

new Array(getRandomNumber(1, 25)).fill(null).map((item, index) => createPhoto(index + 1));
