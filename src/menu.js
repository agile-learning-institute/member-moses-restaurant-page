import { createEle } from "./index.js";

export default function goToMenu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const menuCont = createEle('div', 'menu');
  const menuHeading = createEle('h3', 'menu-heading');
menuHeading.innerHTML = 'Some of Our Dishes';

  const foodContainer = createEle('div', 'food-cont');

  const foods = [
    { name: "Boo", price: "Ush 5,000" },
    { name: "Otigo", price: "Ush 6,000" },
    { name: "Malakwang", price: "Ush 3,500" },
    { name: "Lakotokoto", price: "Ush 4,000" },
    { name: "Lapena", price: "Ush 2,000" },
    { name: "Muranga", price: "Ush 3,500" }
  ];


  for (const food in foods) {
    foodContainer.appendChild(createMenuItem(foods[food].name, foods[food].price));
  }


  menuCont.appendChild(menuHeading);
  menuCont.appendChild(foodContainer);

  content.appendChild(menuCont);
};

function createMenuItem(name, price) {

  const foodItem = createEle('div', 'food');

  const foodImage = createEle('img', 'image');
  foodImage.src = `./images/one.jpg`;
  foodImage.alt = `${name}`;
  foodImage.width = `130px`;
  foodImage.height = '130px';

  const foodName = createEle('p', 'name');
  foodName.innerHTML = name;

  const foodPrice = createEle('p', 'price');
  foodPrice.innerHTML = price;

  foodItem.appendChild(foodImage);
  foodItem.appendChild(foodName);
  foodItem.appendChild(foodPrice);

  return foodItem;

}
