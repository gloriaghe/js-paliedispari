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

parDispNormalizzato = pariDispariUser.toLowerCase()

//definisco se somma pari o dispari


function pariDispari(somma) {

     if (somma % 2 === 0 ){
         return "pari";
     } else { 
         return "dispari";
     }
}
//stabilisco chi ha vinto
    
function vinto() {

    if (pariDispari(somma) === parDispNormalizzato) {
        //immagine
        const noneclass = document.getElementById("imgVinto").classList;
        noneclass.remove("none");

        
        return "Hai vinto complimenti!!!";

    } else {
        //immagine
        const noneclass2 = document.getElementById("imgPerso").classList;
        noneclass2.remove("none");


        return "Hai perso... Mi dispiace!";

    }
}

let numUserHTML = document.querySelector("#numeroscelto").innerHTML = "Hai scelto " + parDispNormalizzato + " e il numero " + numeroUser;
let NumPCHTML = document.querySelector("#numeroPc").innerHTML = "Il Pc ha scelto il numero Random: " + numGenerato;
let sommaHTML = document.querySelector("#somma").innerHTML = "La somma totale è: " + somma;
let risultato = document.querySelector("#PersooVinto").innerHTML = vinto();


