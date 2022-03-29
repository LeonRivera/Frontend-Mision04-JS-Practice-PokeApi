
let pokemonImage = document.querySelector('.pokemon-img');
let btnLeft = document.querySelector('.btn-left');
let btnRight = document.querySelector('.btn-right');

let nameText = document.querySelector('.name');
let hpText = document.querySelector('.hp');
let attackText = document.querySelector('.attack');
let defenseText = document.querySelector('.defense');
let speedText = document.querySelector('.speed');

let idContador = 1;
const pokemon ={
    name: '',
    hp: 0,
    attack: 0,
    defense: 0,
    speed : 0
}



document.addEventListener('DOMContentLoaded', (e) => {
    fetchData();
    fillSkills();
});


btnLeft.addEventListener('click', (e) => {

    if(idContador>1){
        idContador--;
    }
    fetchData();
    fillSkills();
});
btnRight.addEventListener('click', (e) => {
    idContador++;
    console.log("btn right");
    console.log(idContador);

    fetchData();
    fillSkills();
    
});

const fetchData = () => {

    pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${idContador}.gif`;

    let url = `https://pokeapi.co/api/v2/pokemon/${idContador}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => {

        console.log(data);
        console.log(pokemon);
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
}



const fillSkills = () => {
    nameText.textContent = pokemon.name;
    hpText.textContent = pokemon.hp;
    attackText.textContent = pokemon.attack;
    defenseText.textContent = pokemon.defense;
    speedText.textContent = pokemon.speed;
}

