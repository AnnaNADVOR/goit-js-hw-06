const refs = {
    input: document.querySelector('#validation-input'),
}

const inputLength = Number(refs.input.getAttribute('data-length'));

refs.input.addEventListener('blur', onLengthCheck);


function onLengthCheck(event) {
    const inputValue = event.currentTarget.value.trim();
    
    if (inputValue.length === inputLength) {
       
        if (refs.input.classList.contains('invalid')) {
       refs.input.classList.remove('invalid');  
    }
     refs.input.classList.add('valid');
        return;
    }

       
    if (refs.input.classList.contains('valid')) {
       refs.input.classList.remove('valid');  
    }
    refs.input.classList.add('invalid');
}

