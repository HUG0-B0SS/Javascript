/*
Hugo-Hendrik vainlu
10.02.2025
Ülesanne3
*/

// Sõidu aeg ja kaugus
let kaugus = 150; 
let kiirus = 75; 
let aeg = kaugus / kiirus;
console.log("Sõidu aeg: " + aeg + " tundi");

// Postituste kuvamine
let postitusarv = 137;
let postituslehel = 10;
let lehekuljearv = Math.ceil(postitusarv / postituslehel);
let viimaneleht = postitusarv % postituslehel || postituslehel;
console.log("Lehekülgi kokku: " + lehekuljearv);
console.log("Viimasel lehel: " + viimaneleht + " postitust");

// Serveri töökulu
let voimsus = 400; 
let hind = 9.69 / 100; 
let tarbimine = voimsus / 1000; 
let kulu = tarbimine * hind;
console.log("Serveri töökulu ühe tunni jooksul: " + kulu.toFixed(4) + " eurot");
