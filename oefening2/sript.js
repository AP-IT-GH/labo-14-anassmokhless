const firstNameArray = ["Anass", "Jan", "Michael", "Rafael", "Joshua"];
const lastNameArray = ["Mokhless","Poplemon", "Luyten", "lalala", "atatat"];

if(firstNameArray.length !== lastNameArray.length){
    console.log("De lengtes zijn niet gelijk.");
}

for(let index = 0; index < firstNameArray.length; index++){
    console.log(`${firstNameArray[index]} ${lastNameArray[index]}`);
}