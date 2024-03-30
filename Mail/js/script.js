// TEST
// alert("Ciao")


// Creo l'array di mail già registrate a sistema
const arrayEmail = ["test@gmail.com", "test@libero.it", "test@alice.it"]

//Cerco il bottone nella pagina HTML
const accessBtnElem = document.getElementById("access-btn"); 

// dichiaro le varibili per inserimento della mail e del risultato
let insertMail;
let result = false;

// Creo l'evento per il bottone
accessBtnElem.addEventListener("click", function(){
    
    // Salvo le informazioni inserite dall'untente nell' input
    insertMail = document.getElementById("email").value;
    result = false;

    // Eseguo il ciclo per la verifica della mail
    for(let i = 0; i <= arrayEmail.length && result === false && insertMail !== ""; i++){
        // Se la mail inserita dall'utente è presente nell'array della mail registrate cambia lo stato della variabile result da false a true 
        if(insertMail === arrayEmail[i] ){
            result = true;
        }
    }

    // Gestione dei messaggi
    if(result === true){
        document.getElementById("result").innerHTML = `accesso garantito`;
    } else if( result === false && insertMail !== ""){
        document.getElementById("result").innerHTML = `accesso negato. Contattare l'admin`;
    } else{
        document.getElementById("result").innerHTML = `Inserire mail per verifica`;
    }
    
    document.getElementById("email").value = "";
})