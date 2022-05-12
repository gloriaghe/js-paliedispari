//chiedo parola a utente

let parolaUtente = prompt("scrivi una parola");

// inserisco argomento (parola utente) nella funzione per rovesciare la parola
var nuovaStringa = reverseString(parolaUtente);

function reverseString(str) {
    //trasformo in array
    var transformArray = str.split("");
    console.log(transformArray);
    //ribalto l'array
    var revArray = transformArray.reverse();
    console.log(revArray);
    //ritrasformo in stringa
    var parolaVera = revArray.join("");
     return parolaVera;
}

console.log(nuovaStringa);

//funzione che verifica se la parola è palindroma
function parolaPalindroma(parolaUtente, nuovaStringa){

    if(parolaUtente === nuovaStringa){
        return "La parola inserita è palindroma.";
    } else{
        return "La parola inserita non è palindroma.";
    }
}

console.log(parolaPalindroma(parolaUtente, nuovaStringa));

let parolaARovescia =parolaPalindroma(parolaUtente, nuovaStringa);

//invio risultato in pagina
let risultatoPagina = document.querySelector("h1");

risultatoPagina.innerHTML = "Hai inserito la parola " + parolaUtente + ". " + parolaARovescia;