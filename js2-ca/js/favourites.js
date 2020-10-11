import {
  getExistingFav
} from "./components/getExistingFav.js";
import {
  clearButton
} from "./components/clearButton.js";


const favourites = getExistingFav();
clearButton();

const characterContainer = document.querySelector(".character-container");

characterContainer.innerHTML = "";

if (favourites.length === 0) {
  characterContainer.innerHTML = "No favourites yet";
}

favourites.forEach((fav) => {
  characterContainer.innerHTML += `
  <div class="character">
  <img src="./public/${fav.src}">
  <h2>${fav.name}</h2>
  <i class="fa fa-hand-rock"></i>

  `;
});
