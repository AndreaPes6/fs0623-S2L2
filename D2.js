/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const number1 = parseInt(prompt("inserisci il numero 1"))
const number2 = parseInt(prompt("inserisci il numero 2"))

let maggiore

if(number1 > number2) {
  maggiore = number1
}

else if (number2 > number1) {
  maggiore = number2
}

alert(`il numero più grande è ${maggiore}!`)



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numero = parseInt(prompt("inserisci il numero"))

if(numero < 5){
  console.log("not equal")
}

else if(numero > 5){
  console.log("not equal")
}

 else {
  console.log("equal")
 }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let number3 = parseInt(prompt("inserisci qui il tuo numero:"))

if(number3 % 5 === 0) {
  alert("il numero è divisibile per 5!")
}

else {
  alert("il numero non è divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totale= parseInt(prompt("inserisci il totale del carrello:"))
const sconto = 20

const prezzoScontato = (totale, sconto) => {
        
    let valoreSconto = (totale / 100) * sconto;
    let prezzoFinale = totale - valoreSconto;
        
    return prezzoFinale.toFixed(2);
}

if(totale > 50) {
  console.log(`con una spesa totale di ${totale} hai diritto alla spedizione gratuita!`)
}

else if(totale < 50) {
  console.log(`il costo totale è di ${totale + 10}`)
}

else {
  console.log("hai immesso l'importo sbagliato.")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let n1 = 3
let n2 = 9
let n3 = 6

let numerii = [n1, n2, n3];

numerii.sort(function(n1, n2) {
  return n2 - n1;
});

let vMa = numerii[0]
let vMe = numerii[1]
let vMi = numerii[2]

console.log(vMa, vMe, vMi)


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let valore1 = 100
console.log(typeof valore1 === "number")
let valore2 = "50"
console.log(typeof valore2 === "number")

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numeroo = parseInt(prompt("Inserisci il numero:"))

if(numeroo % 2 === 0) {
  console.log("il numero è pari")
}
else {
  console.log("il numero è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
  if (val < 10) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  city: 'Toronto',
  skills: ['javascript2', 'html', 'css'],
}


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2]
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numeri[9] = 100
console.log(numeri)