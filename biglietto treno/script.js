//  Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//  Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: 

//     il prezzo del biglietto è definito in base ai km (0.21€ al km)
//     va applicato uno sconto del 20% per i minorenni
//     va applicato uno sconto del 40% per gli over 65.
//     L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)

// Chiedi all'utente il numero di chilometri e l'età del passeggero
const km = prompt("Quanti chilometri vuoi percorrere?");
const age = prompt("Quanti anni hai?");

// Definizione del costo base per chilometro
const pricePerKm = 0.21;

// Calcolo del prezzo totale senza sconto
let totalPrice = km * pricePerKm;

// Applicazione degli sconti in base all'età
if (age < 18) {
    totalPrice *= 0.8; // Sconto del 20%
} else if (age > 65) {
    totalPrice *= 0.6; // Sconto del 40%
}

// Formattazione del prezzo con massimo due decimali
const formattedPrice = totalPrice.toFixed(2);

// Mostra il risultato finale
alert(`Il prezzo totale del viaggio è €${formattedPrice}`);
