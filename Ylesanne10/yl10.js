/*
Hugo-Hendrik vainlu
10.02.2025
Ülesanne10
*/

// Toote objekt koos omaduste ja meetoditega
const toode = {
    nimetus: "Piim",
    hind: 3.60,
    kogus: 2,
    
    // Meetod toote koguhinna arvutamiseks
    koguhind: function() {
        return this.hind * this.kogus;
    },
    
    // Meetod koguse muutmiseks
    muudakogus: function(uusKogus) {
        this.kogus = uusKogus;
    },
    
    // Meetod toote info kuvamiseks
    kuvainfo: function() {
        console.log(`${this.nimetus} - ${this.hind} EUR - Kogus: ${this.kogus}`);
    }
};

toode.kuvainfo();
console.log("Toote koguhind:", toode.koguhind());

toode.muudakogus(5);
toode.kuvainfo();

// Ostukorvi objekt
const ostukorv = {
    tooted: [
        { nimi: 'Piim', hind: 3.60, kogus: 2 },
        { nimi: 'Leib', hind: 2.00, kogus: 1 },
        { nimi: 'Munad', hind: 1.50, kogus: 6 },
        { nimi: 'Juust', hind: 4.20, kogus: 1 },
        { nimi: 'Tomatid', hind: 2.30, kogus: 3 },
    ],
    
    // Meetod kogu ostukorvi sisu kuvamiseks
    kuvasisu: function() {
        this.tooted.forEach(toode => {
            console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
        });
    },
    
    // Meetod uue toote lisamiseks ostukorvi
    lisatoode: function(nimi, hind, kogus) {
        this.tooted.push({ nimi, hind, kogus });
    },
    
    // Meetod ostukorvi kogu summa arvutamiseks
    kogusumma: function() {
        return this.tooted.reduce((summa, toode) => summa + toode.hind * toode.kogus, 0);
    }
};

ostukorv.kuvasisu();
ostukorv.lisatoode('Kohv', 5.80, 2);
ostukorv.kuvasisu();
console.log('Ostukorvi kogu summa:', ostukorv.kogusumma());
