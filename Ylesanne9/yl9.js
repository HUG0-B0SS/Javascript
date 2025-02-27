/*
Hugo-Hendrik vainlu
10.02.2025
Ülesanne9
*/

// Klassikaline funktsioon, mis tagastab nime
function minunimi() {
    return "Hugo-Hendrik";
}

// Noolefunktsioon, mis tagastab nime
const minuniminoolefunktsioon = () => "Hugo-Hendrik Vainlu";

// Funktsioon, mis kuvab kuupäeva eesti keeles
function kuupaev(kuupaev) {
    const kuud = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
    const osad = kuupaev.split(".");
    const paev = osad[0];
    const kuu = kuud[parseInt(osad[1]) - 1];
    const aasta = "20" + osad[2];
    console.log(`${paev}. ${kuu} ${aasta}`);
}

// Funktsioon, mis leiab sisendina antud täisarvude koguarvu ja keskmise
function keskmine(...arvud) {
    const koguarv = arvud.length;
    const summa = arvud.reduce((acc, arv) => acc + arv, 0);
    const keskmine = koguarv ? summa / koguarv : 0;
    return { koguarv, keskmine };
}

// Noolefunktsioon, mis asendab täishäälikud tärniga
const salasonum = (sonum) => sonum.replace(/[aeiouõäöüAEIOUÕÄÖÜ]/g, '*');

// Noolefunktsioon, mis leiab unikaalsed nimed
const unikaalsednimed = (nimed) => {
    return nimed.filter((nimi, index) => nimed.indexOf(nimi) === index);
};

// Testimiseks:
console.log(minunimi());
console.log(minuniminoolefunktsioon());
kuupaev("19.07.23");
console.log(keskmine(1, 2, 3, 4, 5));
console.log(salasonum("Tere tulemast!"));
console.log(unikaalsednimed(["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]));
