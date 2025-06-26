import { Desserts, Drinks, Foods } from "./food.js";

const Menu = () => {
  const content = document.getElementById("content");
  const newDiv = document.createElement("div");
  newDiv.classList.add(".menu"); // Utilisation de la classe CSS importée

  newDiv.innerHTML = `
    <h1>Notre Menu</h1>
    <section class="foods">
      <h2>Plats</h2>
      <div class="food-list"></div>
    </section>
    <section class="drinks">
      <h2>Boissons</h2>
      <div class="drink-list"></div>
    </section>
    <section class="desserts">
      <h2>Desserts</h2>
      <div class="dessert-list"></div>
    </section>
  `;

  const foodList = newDiv.querySelector(".food-list");
  Foods.map((food) => {
    const divFoods = document.createElement("div");
    divFoods.classList.add("food-item");
    divFoods.innerHTML = `
      <img src="${food.image}" alt="${food.name}" width="100" height="100">
      <h3>${food.name}</h3>
      <p>${food.description}</p>
      <span>${food.price.toFixed(2)} €</span>
    `;
    foodList.appendChild(divFoods);
  });

  const drinkList = newDiv.querySelector(".drink-list");
  Drinks.map((drink) => {
    const drinkDiv = document.createElement("div");
    drinkDiv.classList.add("drink-item");
    drinkDiv.innerHTML = `
      <img src="${drink.image}" alt="${drink.name}" width="100" height="100">
      <h3>${drink.name}</h3>
      <p>${drink.description}</p>
      <span>${drink.price.toFixed(2)} €</span>
    `;
    drinkList.appendChild(drinkDiv);
  });

  const dessertList = newDiv.querySelector(".dessert-list");
  Desserts.map((dessert) => {
    const dessertDiv = document.createElement("div");
    dessertDiv.classList.add("dessert-item");
    dessertDiv.innerHTML = `
      <img src="${dessert.image}" alt="${
      dessert.name
    }" width="100" height="100">
      <h3>${dessert.name}</h3>
      <p>${dessert.description}</p>
      <span>${dessert.price.toFixed(2)} €</span>
    `;
    dessertList.appendChild(dessertDiv);
  });

  content.appendChild(newDiv);
};
export default Menu;
