import burger from "./images/burger.jpg";
import coca from "./images/coca.jpg";
import cremeBrulee from "./images/creme.jpg";
import water from "./images/eau.jpg";
import orangeJuice from "./images/jus.jpg";
import chocolateMousse from "./images/mousse.jpg";
import pasta from "./images/pates.jpg";
import pizza from "./images/pizzam.jpg";
import salad from "./images/salade.jpg";
import applePie from "./images/tarte.jpg";
export const Foods = [
  {
    id: 1,
    name: "Pizza Margherita",
    description:
      "Une pizza classique avec de la sauce tomate, de la mozzarella et du basilic frais.",
    price: 12.99,
    image: pizza,
  },
  {
    id: 2,
    name: "Burger Gourmet",
    description:
      "Un burger juteux avec du fromage, de la laitue, des tomates et notre sauce spéciale.",
    price: 14.99,
    image: burger,
  },
  {
    id: 3,
    name: "Salade César",
    description:
      "Une salade fraîche avec de la laitue romaine, des croûtons, du parmesan et une vinaigrette César.",
    price: 10.99,
    image: salad,
  },
  {
    id: 4,
    name: "Pâtes Carbonara",
    description:
      "Des pâtes crémeuses avec du lardons, des œufs et du parmesan.",
    price: 13.99,
    image: pasta,
  },
];
export const Drinks = [
  {
    id: 1,
    name: "Coca-Cola",
    description: "Boisson gazeuse rafraîchissante.",
    price: 2.99,
    image: coca,
  },
  {
    id: 2,
    name: "Eau Minérale",
    description: "Eau pure et rafraîchissante.",
    price: 1.99,
    image: water,
  },
  {
    id: 3,
    name: "Jus d'Orange",
    description: "Jus d'orange frais et vitaminé.",
    price: 3.49,
    image: orangeJuice,
  },
];
export const Desserts = [
  {
    id: 1,
    name: "Tarte aux Pommes",
    description: "Une tarte aux pommes maison avec une croûte dorée.",
    price: 4.99,
    image: applePie,
  },
  {
    id: 2,
    name: "Mousse au Chocolat",
    description: "Une mousse au chocolat riche et onctueuse.",
    price: 5.49,
    image: chocolateMousse,
  },
  {
    id: 3,
    name: "Crème Brûlée",
    description: "Un dessert classique avec une croûte caramélisée.",
    price: 6.49,
    image: cremeBrulee,
  },
];
