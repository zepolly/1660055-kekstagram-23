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

function checkMaxLengthString (line, maxLine) {
  return (line.length <= maxLine);
}

export {getRandomNumber, checkMaxLengthString};
