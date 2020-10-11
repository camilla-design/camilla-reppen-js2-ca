import {
  baseUrl
} from "./settings/api.js";
import {
  createCharacter
} from "./components/createCharacter.js";
import {
  searchCharacter
} from "./components/searchCharacter.js";
import {
  displayMessage
} from "./components/common/displayMessage.js";


const characterUrl = baseUrl + "super-marios";


(async function () {

  try {
    const response = await fetch(characterUrl);
    const json = await response.json();

    createCharacter(json);
    searchCharacter(json);

  } catch (error) {
    displayMessage("error", error, ".characters-container");
  }
})();
