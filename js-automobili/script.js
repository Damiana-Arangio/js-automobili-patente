/*
    TESTO
    Crea un array composto da 10 automobili. Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano). Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. Infine stampa separatamente i 3 array.
*/

const automobili = [
    { marca: "marca1", modello: "modello1", alimentazione: "metano" },
    { marca: "marca2", modello: "modello2", alimentazione: "benzina" },
    { marca: "marca3", modello: "modello3", alimentazione: "diesel" },
    { marca: "marca4", modello: "modello4", alimentazione: "gpl" },
    { marca: "marca5", modello: "modello5", alimentazione: "disel" },
    { marca: "marca6", modello: "modello6", alimentazione: "benzina" },
    { marca: "marca7", modello: "modello7", alimentazione: "metalo" },
    { marca: "marca8", modello: "modello8", alimentazione: "gpl" },
    { marca: "marca9", modello: "modello9", alimentazione: "diesel" },
    { marca: "marca10", modello: "modello10", alimentazione: "benzina" }
];

// Auto a benzina
const autoBenzina = automobili.filter (auto => auto.alimentazione === "benzina");

// Auto diesel
const autoDiesel = automobili.filter(auto => auto.alimentazione === "diesel");


// Auto gl, elettrico, metano
const autoGplElettricoMetano = automobili.filter(auto => auto.alimentazione !== "benzina" && automobili.alimentazione !== "benzina");

console.log("Auto Diesel: ", autoBenzina);
console.log("Auto Benzina: ", autoDiesel);
console.log("Auto con altri tipi di alimentazione: ", autoGplElettricoMetano);