const decrBtnRef = document.querySelector('button[data-action="decrement"]');
const incrBtnRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

incrBtnRef.addEventListener('click', onIncrementCounter);
decrBtnRef.addEventListener('click', onDecrementCounter);

let counterValue = 0; 
 
function onIncrementCounter() {
    counterValue += 1;
    valueRef.textContent = counterValue;
}

function onDecrementCounter() {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}