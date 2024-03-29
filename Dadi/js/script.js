// Test
// alert("ciao")

// Vado a prendere il bottone tramite il suo id
const btnRoll = document.getElementById("Roll");

// Dichiaro la funzione al bottone
btnRoll.addEventListener("click", function () {

    // Creo le mie due variabili per la generazione del numero random
    let min = 1;
    let max = 6;

    // Creo la mia variabile per la generazione del numero random del dado giocatore(i valori di 1 e 6 sono compresi)
    let randomNumPlayer = Math.floor(Math.random() * (max - min + 1) + min);
    // log alla console
    console.log(`dado giocatore`, randomNumPlayer);

    // Creo la mia variabile per la generazione del numero random del dado CPU(i valori di 1 e 6 sono compresi)
    let randomNumCpu = Math.floor(Math.random() * (max - min + 1) + min);
    // log alla console
    console.log(`dado computer`, randomNumCpu);

    // Gestione dei casi per determinare chi ha rollato il numero più alto o se è avvenuto un pareggio
    if (randomNumPlayer > randomNumCpu) {
        console.log("Hai vinto");
    } else if (randomNumPlayer < randomNumCpu) {
        console.log("Hai perso");
    } else {
        console.log("Pareggio");
    }
})

