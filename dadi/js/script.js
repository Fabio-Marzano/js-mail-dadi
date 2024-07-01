//CREO NUMERO CASUALE PER L'UTENTE//
let user_number = Math.floor(Math.random() * 6 + 1);

//CREO NUMERO CASUALE PER IL PC//
let pc_number = Math.floor(Math.random() * 6 + 1);

const user_icon = document.getElementById('user-number');
const pc_icon = document.getElementById('pc-number');

//GENERO CICLO//
if (user_number == 1) {
    user_icon.classList.add('fa-dice-one');
}
else if (user_number == 2) {
    user_icon.classList.add('fa-dice-two');
}
else if (user_number == 3) {
    user_icon.classList.add('fa-dice-three');
}
else if (user_number == 4) {
    user_icon.classList.add('fa-dice-four');
}
else if (user_number == 5) {
    user_icon.classList.add('fa-dice-five');
}
else  {
    user_icon.classList.add('fa-dice-six');
}

if (pc_number == 1) {
    pc_icon.classList.add('fa-dice-one');
}
else if (pc_number == 2) {
    pc_icon.classList.add('fa-dice-two');
}
else if (pc_number == 3) {
    pc_icon.classList.add('fa-dice-three');
}
else if (pc_number == 4) {
    pc_icon.classList.add('fa-dice-four');
}
else if (pc_number == 5) {
    pc_icon.classList.add('fa-dice-five');
}
else  {
    pc_icon.classList.add('fa-dice-six');
}

//METTO A CONFRONTO I DUE NUMERI//
if (user_number > pc_number) {
    console.log(`Numero utente ${user_number}, numero pc ${pc_number}. Hai vinto`)
}
else if (user_number < pc_number) {
    console.log(`Numero utente ${user_number}, numero pc ${pc_number}. Hai perso`)
}