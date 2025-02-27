/*
Hugo-Hendrik vainlu
10.02.2025
Ülesanne8
*/

//Mündid
const vaartused = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];
const mundid = []; 

let i = 0;
while (i < vaartused.length) {
    if (vaartused[i] <= 2 && vaartused[i] > 0) {
        mundid.push(vaartused[i]); 
    }
    i++;
}

const summa = mundid.reduce((acc, vaartus) => acc + vaartus, 0);

console.log(`Leitud mündid: ${mundid.length} tk`);
console.log(`Müntide summa: €${summa.toFixed(2)}`);
console.log(`Mündid: ${mundid.join(", ")}`);
