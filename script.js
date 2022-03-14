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

// ESERCIZIO PARI E DISPARI 
/*
-L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
-Generiamo un numero random 
(sempre da 1 a 5)
-per il computer (usando una funzione).
-Sommiamo i due numeri
-Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
-Dichiariamo chi ha vinto.
*/


const richiestaPariDispari = prompt('Scegli.. Pari o Dispari?');
