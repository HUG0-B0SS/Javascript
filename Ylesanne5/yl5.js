/*
Hugo-Hendrik vainlu
10.02.2025
Ülesanne5
*/

// Temperatuur
let temperatuur = prompt("Sisesta temperatuur: ");
if (temperatuur > 25) {
    console.log("Väga kuum ilm!");
} else if (temperatuur >= 15 && temperatuur <= 25) {
    console.log("Mõnus temperatuur");
} else {
    console.log("Jahe ilm");
}

// Kasutajanime kontroll
let kasutaja = prompt("Sisesta kasutajanimi: ");
console.log(kasutaja === "admin" ? "Tere, administraator!" : "Tere, külaline!");

// Ürituse piletite hind
let tyyp = prompt("Sisesta piletitüüp (täispilet või sooduspilet): ");
let vanus = prompt("Sisesta oma vanus: ");
let hind = 0;
if (tyyp === "täispilet") {
    if (vanus < 18) {
        hind = 10;
    } else if (vanus >= 18 && vanus < 65) {
        hind = 20;
    } else {
        hind = 15;
    }
} else if (tyyp === "sooduspilet") {
    if (vanus < 18 || vanus >= 65) {
        hind = 8;
    } else {
        hind = 15;
    }
}
console.log("Pileti hind: " + hind + " eurot");
