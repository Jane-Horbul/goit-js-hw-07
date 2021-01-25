const validationInRef = document.querySelector('#validation-input');

function validate(str) { 
    return str.length >= 6;
}
validationInRef.addEventListener('blur', e => {
    
    const { value } = e.target;

    if (!validate(value)) {
        validationInRef.classList.add('invalid');
    } if (validate(value)) { 
 validationInRef.classList.add('valid');
    }
});

validationInRef.addEventListener('focus', e => {
    e.target.classList.remove('invalid');
});

validationInRef.addEventListener('focus', e => {
    e.target.classList.remove('valid');
});