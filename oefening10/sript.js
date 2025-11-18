function NameFromEmail(email){
    let indexat = email.indexOf("@");
    let userName = email.substring(0, indexat);

    return userName;
}

console.log(NameFromEmail("anass.mokhless@gmail.com"));