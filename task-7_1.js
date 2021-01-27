const elemRef = document.querySelector('.item');
const itemTitleref = document.querySelector('h2');
const listRef = document.querySelector('#categories');


console.log(`В списке ${document.getElementsByClassName('item').length} категории`);

const itemChildrenArray = Array.from(document.getElementsByClassName('item'));

for (let num = 0; num < itemChildrenArray.length; num++) {

    console.log(`Категория: ${itemChildrenArray[num].firstElementChild.textContent} 
Количество элементов: ${itemChildrenArray[num].lastElementChild.children.length}`);
};



