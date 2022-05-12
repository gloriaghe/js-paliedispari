//chiedo pari o dispari
let pariDispariUser = prompt("scegli 'pari' o 'dispari'");

//chiedo numero da 1 a 5
let numeroUser = parseInt(prompt("Scegli un numero da 1 a 5"));

//genero numero random da 1 a 5
function getnumRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numGenerato = getnumRandom(1, 5);

//sommo i due numeri
let somma = numGenerato + numeroUser;

//definisco se somma pari o dispari
parDispNormalizzato = pariDispariUser.toLowerCase()

function pariDispari(somma) {
    if (somma % 2 === 0 && parDispNormalizzato === "pari"){
        return "La somma è pari, complimenti hai vinto.";
    } else if (somma % 2 !== 0 && parDispNormalizzato === "dispari") { 
        return "La somma è dispari, complimenti hai vinto.";
    } else if (somma % 2 !== 0 && parDispNormalizzato === "pari"){
        return "La somma è dispari... Mi dispiace ma hai perso.";
    } else if (somma % 2 === 0 && parDispNormalizzato === "dispari") {
        return "La somma è pari... Mi dispiace ma hai perso.";
    }
}

//stabilisco chi ha vinto
let numUserHTML = document.querySelector("#numeroscelto").innerHTML = "Hai scelto " + parDispNormalizzato + " e il numero " + numeroUser;
let NumPCHTML = document.querySelector("#numeroPc").innerHTML = "Il Pc ha scelto il numero Random: " + numGenerato;
let sommaHTML = document.querySelector("#somma").innerHTML = "La somma totale è: " + somma;
let risultato = document.querySelector("#PersooVinto").innerHTML = pariDispari(somma);

//BONUS


    if ((somma % 2 === 0 && parDispNormalizzato === "pari") || (somma % 2 !== 0 && parDispNormalizzato === "dispari")) {
        const noneclass = document.getElementById("imgVinto").classList;
        noneclass.remove("none");
    } else if ((somma % 2 !== 0 && parDispNormalizzato === "pari") || (somma % 2 === 0 && parDispNormalizzato === "dispari")) {
        const noneclass2 = document.getElementById("imgPerso").classList;
        noneclass2.remove("none");
    }
