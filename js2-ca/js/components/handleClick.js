import {
  getExistingFav
} from "./getExistingFav.js";

export function handleClick() {
  event.target.classList.toggle("far");
  event.target.classList.toggle("fas");

  const id = this.dataset.id;
  const name = this.dataset.name;
  const image = this.dataset.src;

  const currentFav = getExistingFav();

  const characterExists = currentFav.find(function (favs) {
    return favs.id === id;
  });

  if (characterExists === undefined) {
    const character = {
      id: id,
      name: name,
      src: image
    };
    currentFav.push(character);
    saveFav(currentFav);
  } else {
    const newFav = currentFav.filter((favs) => favs.id !== id);
    saveFav(newFav);
  }

}

function saveFav(fav) {
  localStorage.setItem("favourites", JSON.stringify(fav));
}
