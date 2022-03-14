console.log('Js Ok');

// ESERCIZIO PALINDROMA

/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const parola = prompt('Inserisci una parola');

const parolaInversa = invertiParola(parola);

if (parola == parolaInversa) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}

function invertiParola(analisiParola) {
    let parolaAnalizzata = analisiParola.split('').reverse().join('');
    return parolaAnalizzata;
}

