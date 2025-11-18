let pokemon = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
];

let team = [];
let index = 0;
let chosenPokemon = 0;
do{
  chosenPokemon = parseInt(prompt("Welke pokemon wil je in je team ? [1-21]"));
  if(chosenPokemon > 0 && chosenPokemon <= 21){
    team[index] = pokemon[chosenPokemon - 1];
  index++;
  }
  else{
    alert("Dit was geen optie");
  }
}while(!isNaN(chosenPokemon));

team.pop();
for(let i = 0; i < team.length; i++){
    console.log(`${i+1}. ${team[i]}`);
}
