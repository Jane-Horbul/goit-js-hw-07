const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');
const formRef = document.querySelector('form');

nameOutputRef.textContent ='незнакомец';

document.addEventListener('input', event => {
    event.preventDefault();
    if (nameInputRef.value == '') { 
        nameOutputRef.textContent = 'незнакомец';
    }else{
    nameOutputRef.textContent = nameInputRef.value;
    }

});
