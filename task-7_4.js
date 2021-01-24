let increment = document.getElementById("buttonCountPlus");
let decrement = document.getElementById("buttonCountMinus");
let counterValue = document.getElementById("value");
let number = 0;

increment.addEventListener('click', () => {
    number++;
    counterValue.innerHTML = number;
});

decrement.addEventListener('click', () => {
    number--;
    counterValue.innerHTML = number;
});
