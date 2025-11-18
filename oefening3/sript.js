let amountOf = prompt("Hoeveel vrienden wil je toevoegen ?");
let friendsArray =[];

for(let index = 0; index < amountOf; index++){
    friendsArray[index] = prompt("Geef een vriend in");
}

for(let index = amountOf; index >= 0; index--){
    console.log(`${friendsArray[index]}`);
}