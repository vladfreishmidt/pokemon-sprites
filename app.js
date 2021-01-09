const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement("div");
  const label = document.createElement("span");
  const newImg = document.createElement("img");
  label.innerText = i;
  newImg.src = `${baseURL}${i}.png`;
  container.appendChild(pokemon);
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
}
