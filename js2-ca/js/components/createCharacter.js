import {
  handleClick
} from "./handleClick.js";



export function createCharacter(json) {
  const container = document.querySelector(".characters-container");

  container.innerHTML = "";

  json.forEach(function (character) {
    container.innerHTML += `
      <div class="char-container">
      <i class="far fa-hand-rock" data-id="${character.id}" data-name="${character.name}" data-src="${character.image[0].url}"></i>
        <h4>${character.name}</h4>
        <img src="./public/${character.image[0].url}" />
        <p><span>Created by:</span> ${character.designed}</p>
        <p><b>All information and images is from wikipedia</b></p>
        <p><span>Description:</span> ${character.description}</p>
      </div> `;
  });

  const favButton = document.querySelectorAll(".char-container i");

  favButton.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
}
