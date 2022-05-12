//chiedo pari o dispari
let pariDispariUser = prompt("scegli 'pari' o 'dispari'");

//chiedo numero da 1 a 5
let numeroUser = parseInt(prompt("Scegli un numero da 1 a 5"));

//genero numero random da 1 a 5
function getnumRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numGenerato = getnumRandom(1, 5);
console.log(numGenerato);

//sommo i due numeri
let somma = numGenerato + numeroUser;
console.log(somma);

//definisco se somma pari o dispari
parDispNormalizzato = pariDispariUser.toLowerCase()

function pariDispari(somma) {
    if (somma % 2 === 0 && parDispNormalizzato === "pari"){
        return ". È pari e quindi hai vinto.";
    } else if (somma % 2 !== 0 && parDispNormalizzato === "dispari") { 
        return ". È dispari e quindi hai vinto.";
    } else if (somma % 2 !== 0 && parDispNormalizzato === "pari"){
        return ". È dispari... Mi dispiace ma hai perso.";
    } else if (somma % 2 === 0 && parDispNormalizzato === "dispari") {
        return ". È pari... Mi dispiace ma hai perso.";
    }
}
//stabilisco chi ha vinto
let risultato = document.querySelector("h1")
risultato.innerHTML = "La tua scelta è " + parDispNormalizzato + " e il numero che hai scelto è " + numeroUser + ". Il Pc invece ha scelto il numero random " + numGenerato + " per cui la somma è " + somma + pariDispari(somma);