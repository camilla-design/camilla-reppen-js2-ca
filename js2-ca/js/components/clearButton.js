export function clearButton() {
  const clearBtn = document.querySelector("#clear");

  clearBtn.addEventListener("click", clearList);

  function clearList() {
    localStorage.clear();

    const characterContainer = document.querySelector(".character-container");
    characterContainer.innerHTML = "You have cleared your favourites";

  }
}
