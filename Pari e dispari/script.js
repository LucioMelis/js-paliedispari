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

// Richieste a utente 
const richiestaPariDispari = prompt('Scegli.. Pari o Dispari?');
const numeroRichiesto = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(`Il numero dell'utente è ${numeroRichiesto}`);

// variabile numero random pc 
let numeroRandomPc = generaNumeroRandom(1, 5);
console.log(`il numero del Pc è ${numeroRandomPc}`);


// Variabile sommatotale 
let sommaTotale = numeroRichiesto + numeroRandomPc;
console.log(`la somma è:${sommaTotale}`);


// Variabile Verdetto dopo la funzione 
const verdettoPariDispari = sommaPariDispari(sommaTotale);
console.log(verdettoPariDispari);


// FUNZIONE NUMERO RANDOM 
function generaNumeroRandom(min, max) {

    const range = max - min + 1;

    const generatedNumber = Math.floor(Math.random() * range) + min;

    return generatedNumber;

}
// FUNZIONE VERDETTO PARI O DISPARI 
function sommaPariDispari(somma) {

    let numero = 'dispari';
    if (somma % 2 == 0) {
        numero = 'pari';
    }

    return numero
}


if (richiestaPariDispari.toLocaleLowerCase() === verdettoPariDispari) {
    console.log(`Ha vinto l'Utente con ${richiestaPariDispari}, la somma è: ${verdettoPariDispari}`);
} else {
    console.log(`Ha vinto il Computer! utente: ${richiestaPariDispari}, la somma è: ${verdettoPariDispari}`);
}


