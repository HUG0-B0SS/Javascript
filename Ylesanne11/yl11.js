/*
Hugo-Hendrik vainlu
10.02.2025
Ülesanne11
*/

// Nimedega seotud funktsioonid
const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

// Funktsioon nimede korrigeerimiseks
const korrektsednimed = nimed.map(nimi => {
    return nimi.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()).join(" ");
});
console.log("Korrektsed nimed:", korrektsednimed);

// Funktsioon emaili loomiseks perenime põhjal
const emailid = korrektsednimed.map(nimi => {
    let perenimi = nimi.split(" ")[1].toLowerCase();
    return `${perenimi}@metshein.com`;
});
console.log("E-mailid:", emailid);

// Funktsioon nime otsimiseks massiivist
function otsinime(nimi) {
    let leitudnimed = korrektsednimed.filter(n => n.toLowerCase().includes(nimi.toLowerCase()));
    return leitudnimed.length ? leitudnimed : "Nime ei leitud";
}
console.log(otsinime("Kadi"));

// Sünniaeg ja vanus
const inimesteandmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
];

// Funktsioon sünniaja ja vanuse leidmiseks
function leiavanus(ik) {
    let aasta = parseInt(ik.slice(1, 3));
    let kuu = parseInt(ik.slice(3, 5));
    let paev = parseInt(ik.slice(5, 7));
    let sajand = ik[0] === "3" || ik[0] === "4" ? 1900 : 2000;
    let synniaasta = sajand + aasta;
    let tana = new Date();
    let vanus = tana.getFullYear() - synniaasta;
    return { synniaeg: `${paev}.${kuu}.${synniaasta}`, vanus };
}

inimesteandmed.forEach(inimene => {
    let andmed = leiavanus(inimene.isikukood);
    console.log(`${inimene.nimi} - Sünniaeg: ${andmed.synniaeg}, Vanus: ${andmed.vanus}`);
});

// Kaugushüppe tulemused
const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
];

// Kaugushüppe tulemuste arvutamine
opilased.forEach(opilane => {
    let parim = Math.max(...opilane.tulemused);
    let keskmine = (opilane.tulemused.reduce((a, b) => a + b, 0) / opilane.tulemused.length).toFixed(2);
    console.log(`${opilane.nimi} - Parim tulemus: ${parim}m, Keskmine: ${keskmine}m`);
});
