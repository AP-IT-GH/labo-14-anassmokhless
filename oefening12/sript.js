function IsLeapYear(year) {
  let leapyear = false;

  for (let i = 1950; i <= year; i++) {
   if(i % 400 === 0){
    console.log(`Het jaar ${i} is een schrikkeljaar`)
   }
   else if(i % 4 === 0 && i%100!==0){
    console.log(`Het jaar ${i} is een schrikkeljaar`)
   }
  }

  if(year % 400 === 0){
    leapyear = true;
  }
  else if(year % 4 === 0 && year%100!==0){
    leapyear = true;
  }
}

IsLeapYear(2028);


