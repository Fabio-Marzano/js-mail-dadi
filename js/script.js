//STABILISCO SU QUALE EMAIL EFFETTUARE LA VERIFICA//
let emails = ['fabiomarzano@gmail.com', 'federica@gmail.com', 'giulio@gmail.com', 'donatina@gmail.com'];
//RECUPERO IL PULSANTE DAL DOM//
const btn = document.getElementById('check');

//AGGIUNGO EVENTO CLICK AL PULSANTE DI AVVIO//
btn.addEventListener('click', function () {
    //  RECUPERO IL VALORE DELL'INPUT//
    let user_email = document.getElementById('email').value;

    let check_email = false;
    //CICLO ARRAY//
    for (let i = 0; i < emails.length; i++) {
        if (emails[i] != user_email) {
            check_email = false;
        }
        else {
            check_email = true;
           
        }
    }

    if (check_email) {
        console.log('Email esistente. Benvenuto');
    }

    else {
        console.log('Email non esistente. Per favore registrati');
    }
})