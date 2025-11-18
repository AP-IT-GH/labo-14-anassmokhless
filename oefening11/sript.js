function PrintMaaltafel(getal, iteraties){
   for(let i = 1; i<= iteraties; i++) {
    let solution = i * getal;
    console.log(`${solution}`)
   }
}

PrintMaaltafel(5, 10);