function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('#controls > input'), 
  container: document.querySelector('#boxes'),
}

Refs.createBtn.addEventListener('click', onCreateBtnClick);
Refs.input.addEventListener('input', getValue);
Refs.destroyBtn.addEventListener('click', destroyBoxes);

function onCreateBtnClick() {
  destroyBoxes();
  createBoxes(getValue()); 
}

function getValue() {
  let value = Refs.input.value;
  if (value > 100) {
    value = 100; 
    Refs.input.value = 100;
  }
  return value;
}
 
function createBoxes(amount) {
  let width = 30; 
  let height = 30; 
  for (let i = 1; i <= amount; i += 1) {
    width += 10; 
    height += 10; 

    const box = document.createElement("div"); 
    
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = `${height}px`;
    box.style.width = `${width}px`;

    Refs.container.append(box);    
  }
}

function destroyBoxes() {
  let child = Refs.container.lastElementChild; 
  while (child) {
    Refs.container.removeChild(child);
    child = Refs.container.lastElementChild;
  }  
}






