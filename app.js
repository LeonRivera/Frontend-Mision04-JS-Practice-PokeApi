
let pokemonImage = document.querySelector('.pokemon-img');

document.addEventListener('DOMContentLoaded', (e) => {
    console.log("Hola");

    pokemonImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/25.gif";

    let url = "https://pokeapi.co/api/v2/pokemon/25"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
});