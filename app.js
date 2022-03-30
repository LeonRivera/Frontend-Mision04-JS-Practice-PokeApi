
let pokemonImage = document.querySelector('.pokemon-img');
let btnLeft = document.querySelector('.btn-left');
let btnRight = document.querySelector('.btn-right');

let nameText = document.querySelector('.name');
let hpText = document.querySelector('.hp');
let attackText = document.querySelector('.attack');
let defenseText = document.querySelector('.defense');
let speedText = document.querySelector('.speed');

let idContador = 0;
const pokemon ={
    name: '',
    hp: 0,
    attack: 0,
    defense: 0,
    speed : 0
}



document.addEventListener('DOMContentLoaded', (e) => {
    idContador++;
    fetchData();
    setTimeout(() => {
        fillSkills();
    }, 100);
});


btnLeft.addEventListener('click', (e) => {

    if(idContador>1){
        idContador--;
    }
    fetchData();
    setTimeout(() => {
        fillSkills();
    }, 100);
});
btnRight.addEventListener('click', (e) => {
    idContador++;
    console.log("btn right");
    console.log(idContador);

    fetchData();
    setTimeout(() => {
        fillSkills();
    }, 100);
    
});

function fetchData() {

    pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${idContador}.gif`;

    let url = `https://pokeapi.co/api/v2/pokemon/${idContador}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => {

        pokemon.name = data.name;
        let arrayStats = data.stats;

        for(stats of arrayStats){

            switch(stats.stat.name){
                case 'hp':
                    pokemon.hp = stats.base_stat;
                    break;
                case 'attack':
                    pokemon.attack = stats.base_stat;
                    break;
                case 'defense':
                    pokemon.defense = stats.base_stat;
                    break;
                case 'speed':
                    pokemon.speed = stats.base_stat;
            }
        }
    })

    console.log(pokemon);
}



const fillSkills = () => {
    nameText.textContent = pokemon.name;
    hpText.textContent = pokemon.hp;
    attackText.textContent = pokemon.attack;
    defenseText.textContent = pokemon.defense;
    speedText.textContent = pokemon.speed;
}

