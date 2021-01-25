const inputRef = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

inputRef.addEventListener('input', function() {
let size = inputRef.value;
span.style.fontSize = size + "px";
});