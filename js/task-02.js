const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];

const ingredientsListRef = document.querySelector('#ingredients');

// const elements = ingredients.map(ingredient => {
//   const ingredientRef = document.createElement('li');
//   ingredientRef.textContent = ingredient;
//   ingredientRef.classList.add('item');
  
//   return ingredientRef;
// });

const createElements = elements => {
 return elements.map(ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;
  ingredientRef.classList.add('item');
  
  return ingredientRef;
});
}
const elements = createElements(ingredients);
ingredientsListRef.append(...elements);





