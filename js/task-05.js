const refs = {
    input: document.querySelector('#name-input'), 
    name:document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {

   const inputValue = event.currentTarget.value.trim()
   
    if (inputValue === '') {
        refs.name.textContent = 'Anonymous';
        return;
    }
    
    refs.name.textContent = inputValue;
}

 