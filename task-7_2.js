const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const newLiRef = ingredients.map(text => {
    const itemRef = document.createElement('li');
    itemRef.textContent = text;

    return itemRef;
});

const ingredientsRef = document.querySelector('ul');

ingredientsRef.append(...newLiRef);