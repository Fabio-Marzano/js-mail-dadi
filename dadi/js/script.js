//CREO NUMERO CASUALE PER L'UTENTE//
let user_number = Math.floor(Math.random() * 6 + 1);

//CREO NUMERO CASUALE PER IL PC//
let pc_number = Math.floor(Math.random() * 6 + 1);

//METTO A CONFRONTO I DUE NUMERI//
if (user_number > pc_number) {
    console.log("Hai vinto")
}
else if(user_number < pc_number) {
    console.log("Hai perso")
}