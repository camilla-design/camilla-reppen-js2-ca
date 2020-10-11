export function getExistingFav() {
  const fav = localStorage.getItem("favourites");

  console.log(fav);

  if (!fav) {
    return [];
  } else {
    return JSON.parse(fav);
  }
}
