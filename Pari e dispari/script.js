console.log('Js Ok');
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
const numeroRichiesto = parseInt(prompt('Inserisci un numero da 1 a 5'));

let numeroRandom = generaNumeroRandom(1, 5);
console.log(numeroRandom);

function generaNumeroRandom(min, max) {

    const range = max - min + 1;

    const generatedNumber = Math.floor(Math.random() * range) + min;

    return generatedNumber;

}