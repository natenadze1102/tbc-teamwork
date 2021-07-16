'use strict';
const names = document.body.querySelectorAll('li');

names.forEach((name) => {
  //generate random color
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  name.style.color = randomColor;
});
