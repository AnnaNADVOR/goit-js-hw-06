function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = { 
  button: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
  body: document.querySelector('body'),
} 

refs.button.addEventListener('click', onColorChange); 

function onColorChange() {

const bodyColor = getRandomHexColor();

  refs.body.style.backgroundColor = bodyColor;
  refs.color.textContent = bodyColor;
}