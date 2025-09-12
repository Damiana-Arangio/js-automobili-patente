/*
    TESTO
    Crea un array di oggetti che rappresentano delle persone. Ogni persona ha un nome, un cognome e un’età.
    Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione 
    se può guidare, in base all’età.*/

const persone = [
    { nome: "nomeA" , cognome: "cognomeA", eta: 20 },
    { nome: "nomeB", cognome: "cognomeB", eta: 15 },
    { nome: "nomeC", cognome: "cognomeC", eta: 18 },
    { nome: "nomeD", cognome: "cognomeD", eta: 50 },
    { nome: "nomeE", cognome: "cognomeE", eta: 12 },
];

// Controllo se persona maggiorenne/minorenne e ritorno stringa
const arrayStringhe = persone.map((persona) => {

    // Persona maggiorenne
    if (persona.eta >= 18) {
        return `La persona ${persona.nome} ${persona.cognome} può guidare!`;
    }

    // Persona minorenne
    else {
        return `La persona ${persona.nome} ${persona.cognome} non può guidare!`;
    }
});

console.log(arrayStringhe);