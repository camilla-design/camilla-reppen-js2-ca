import {
  createCharacter
} from "./createCharacter.js";

export function searchCharacter(json) {
  const search = document.querySelector(".search");

  search.onkeyup = function () {

    const searchValue = event.target.value.trim().toLowerCase();

    const filterCharacters = json.filter(function (character) {
      if (character.name.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    createCharacter(filterCharacters);

  };
}
