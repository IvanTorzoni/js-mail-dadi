// Test
// alert("ciao")


// Creo le mie due variabili per la generazione del numero random
let min = 1;
let max = 6;

// Creo la mia variabile per la generazione del numero random di un dado(i valori di 1 e 6 sono compresi)
let randomNumPlayer = Math.floor(Math.random() * (max - min + 1) + min);
    // log alla console
    console.log(`valore dado`, randomNumPlayer);