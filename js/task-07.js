const refs =  {
    input: document.querySelector('input#font-size-control'),
    text: document.querySelector('span#text'),
}

refs.input.addEventListener('input', onSizeChange); 

function onSizeChange(event) {

    refs.text.style.fontSize = `${event.currentTarget.value}px`;
       
}