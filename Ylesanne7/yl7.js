/*
Hugo-Hendrik vainlu
10.02.2025
Ülesanne7
*/

// 1. Kuva kõik tooted järjekorranumbriga ja filtreeri vastavalt tingimusele
const tooted = ["Õunad", "Piim", "Leib", "Juust", "Tomatid", "Kanafilee", "Muna", "Sibul", "Apelsinid", "Riis", "Jogurt", "Kartul", "Kalafilee", "Pasta", "Jogurtijook", "Porgandid", "Virsikud", "Pähklid", "Rosinad", "Kapsas", "Kreeka jogurt", "Veiseliha", "Banaanid", "Oliivid", "Mandlid", "Magus kartul", "Greibid"];

let loendur = 1;
for (let i = 0, naidatud = 0; i < tooted.length && naidatud < 10; i++) {
    if (!["Muna", "Sibul", "Riis"].includes(tooted[i])) {
        console.log(`${loendur}. ${tooted[i]}`);
        loendur++;
        naidatud++;
    }
}

// 2. Leia iga kuu keskmine temperatuur
const temperatuurid = [
    [5, 8, 12, 10, 7, 9, 11, 14, 16, 13, 10, 6, 4, 3, 2, 4, 6, 8, 10, 12, 15, 17, 18, 16, 13, 10],
    [1, 4, 6, 7, 9, 11, 13, 15, 12, 9, 7, 5, 3, 2, 3, 6, 8, 10, 12, 15, 17, 19, 18, 16, 13, 11],
    [8, 10, 13, 15, 16, 18, 19, 20, 17, 15, 13, 11, 10, 9, 8, 10, 12, 14, 16, 18, 20, 22, 21, 18, 16, 14],
    [2, 5, 7, 9, 12, 15, 17, 18, 15, 13, 11, 8, 6, 5, 4, 7, 9, 12, 14, 16, 19, 21, 20, 18, 16, 13],
    [6, 8, 11, 14, 16, 18, 20, 21, 18, 15, 12, 10, 8, 6, 5, 8, 10, 13, 15, 18, 20, 22, 21, 19, 16, 13],
    [11, 14, 17, 19, 21, 23, 24, 22, 19, 16, 13, 11, 10, 9, 9, 12, 15, 18, 20, 23, 25, 27, 26, 24, 21, 18],
    [9, 11, 14, 16, 18, 20, 22, 21, 18, 16, 13, 11, 9, 8, 7, 10, 13, 16, 18, 21, 23, 24, 23, 21, 18, 15],
    [7, 10, 13, 15, 17, 20, 22, 23, 20, 17, 14, 12, 10, 9, 8, 11, 14, 17, 19, 22, 24, 26, 25, 23, 20, 17],
    [3, 6, 9, 11, 13, 15, 17, 18, 16, 14, 11, 9, 7, 6, 5, 8, 10, 13, 15, 17, 19, 21, 20, 18, 15, 12],
    [1, 3, 5, 7, 9, 11, 13, 15, 12, 9, 7, 5, 3, 2, 3, 6, 8, 10, 12, 15, 17, 19, 18, 16, 13, 11],
    [6, 8, 11, 14, 16, 18, 20, 21, 18, 15, 12, 10, 8, 6, 5, 8, 10, 13, 15, 18, 20, 22, 21, 19, 16, 13],
    [10, 13, 16, 18, 20, 22, 23, 24, 21, 18, 15, 13, 11, 10, 9, 12, 15, 18, 20, 23, 25, 27, 26, 24, 21, 18]
];

const kuud = "Jaanuar, Veebruar, Märts, Aprill, Mai, Juuni, Juuli, August, September, Oktoober, November, Detsember".split(", ");

let koigekorgem = -Infinity;
let koigemadalam = Infinity;
let korgeimkuu = "";
let madalaimkuu = "";

temperatuurid.forEach((temperatuurid, indeks) => {
    let summa = temperatuurid.reduce((acc, temp) => acc + temp, 0);
    let keskmine = summa / temperatuurid.length;
    console.log(`${kuud[indeks]} keskmine temperatuur: ${keskmine.toFixed(2)}°C`);
    
    let maxtemp = Math.max(...temperatuurid);
    let mintemp = Math.min(...temperatuurid);
    
    if (maxtemp > koigekorgem) {
        koigekorgem = maxtemp;
        korgeimkuu = kuud[indeks];
    }
    if (mintemp < koigemadalam) {
        koigemadalam = mintemp;
        madalaimkuu = kuud[indeks];
    }
});

console.log(`Kõige kõrgem temperatuur oli ${korgeimkuu} (${koigekorgem}°C)`);
console.log(`Kõige madalam temperatuur oli ${madalaimkuu} (${koigemadalam}°C)`);
