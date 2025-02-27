/*
Hugo-Hendrik vainlu
10.02.2025
Ülesanne2
*/

//Kellaaeg
let tunnid = 2;
let minutid = 38;
let sekundid = 59;
let kell = tunnid + ":" + minutid + ":" + sekundid + "PM";
console.log(kell);
//Tsitaat
let tsitaat = '"Olukord on sitt, kuid see on meie tuleviku väetis."';
let autor = "Lennart Meri";
let tsitaatautor = tsitaat + " - " + autor;
console.log(tsitaatautor); 

//Mallide kasutamine
let eesnimi = "Jüri";
let perenimi = "Jurakas";
let esitähed = `${eesnimi} ${perenimi} nimetähed on ${eesnimi[0]}.${perenimi[0]}.`;
console.log(esitähed);

//Perenime pikkus
let nimi = "Jurakas, Jüri";
let koma = nimi.indexOf(",");
let eraldatud = nimi.slice(0, koma).toUpperCase();
console.log(eraldatud);
console.log(eraldatud.length);

//E-posti aadressi muutmine
let epost = "karrolk@netlog.com";
let gmail = epost.replace("netlog", "gmail");
console.log(gmail);

//Andmerida analüüs
let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
let andmed = andmerida.split(",");
let ip = andmed[5];
let email = andmed[3];
let kasutajanimi = email.split("@")[0];
console.log(ip);
console.log(kasutajanimi);
