import { loadPage } from ".";
const Homepage = () => {
  const content = document.getElementById("content");
  const newDiv = document.createElement("div");
  newDiv.classList.add = "homepage";
  newDiv.innerHTML = `
    <h1 class="title">Bienvenue dans notre restaurant !</h1>
    <div class="contentWrapper">
    <p class="text">Nous sommes ravis de vous accueillir dans notre restaurant. Notre équipe est dédiée à vous offrir une expérience culinaire inoubliable.</p>
    <p class="text">Notre menu propose une variété de plats délicieux, préparés avec des ingrédients frais et de qualité. Que vous soyez amateur de cuisine traditionnelle ou à la recherche de nouvelles saveurs, nous avons quelque chose pour tout le monde.</p>
    </div>
    <div class="highlight">
    <p class="">Nous vous invitons à explorer notre menu et à découvrir nos spécialités. N'hésitez pas à nous faire part de vos préférences ou de vos allergies alimentaires, notre personnel se fera un plaisir de vous aider.</p>
    </div>
    <button class="to-menu menuButton">Voir le menu</button>
    <p class="text">Nous espérons que vous passerez un agréable moment parmi nous. Merci de choisir notre restaurant pour votre repas.</p>
    <p class="signature">À bientôt !</p>
  `;
  const button = newDiv.querySelector(".to-menu");
  button.addEventListener("click", () => {
    loadPage("menu");
  });
  content.appendChild(newDiv);
};
export default Homepage;
