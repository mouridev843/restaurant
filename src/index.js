import Contact from "./Contact";
import Homepage from "./Home";
import Menu from "./Menu";
import "./styles.css";

export function loadPage(page) {
  const content = document.getElementById("content");
  content.innerHTML = ""; // Effacer actuel contenu
  switch (page) {
    case "home":
      Homepage();
      break;
    case "menu":
      Menu();
      break;
    case "contact":
      Contact();
      break;
    default:
      Homepage(); // Par défaut, charger la page d'accueil
  }
}
document.addEventListener("DOMContentLoaded", () => {
  loadPage("home");
  const buttons = document.querySelectorAll(".btn");
  buttons[0].addEventListener("click", () => {
    loadPage("home");
    setActiveButton(buttons[0]);
  });
  buttons[1].addEventListener("click", () => {
    loadPage("menu");
    setActiveButton(buttons[1]);
  });
  buttons[2].addEventListener("click", () => {
    loadPage("contact");
    setActiveButton(buttons[2]);
  });
  function setActiveButton(button) {
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  }
});
