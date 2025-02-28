/*
Hugo-Hendrik vainlu
10.02.2025
Ülesanne12
*/

document.addEventListener("DOMContentLoaded", function () {
    const ostukorvelement = document.getElementById("ostukorv");
    const kogusummaelement = document.getElementById("kogusumma");

    const ostukorv = {
        tooted: [
            { nimi: 'Piim', hind: 3.60, kogus: 2 },
            { nimi: 'Leib', hind: 2.00, kogus: 1 },
            { nimi: 'Munad', hind: 1.50, kogus: 6 },
            { nimi: 'Juust', hind: 4.20, kogus: 1 },
            { nimi: 'Tomatid', hind: 2.30, kogus: 3 },
        ]
    };

    // Kuvame ostukorvi sisu
    ostukorv.tooted.forEach(toode => {
        const item = document.createElement("li");
        item.textContent = `${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`;
        ostukorvelement.appendChild(item);
    });

    // Arvutame ja kuvame kogusumma
    const kogusumma = ostukorv.tooted.reduce((sum, toode) => sum + (toode.hind * toode.kogus), 0);
    kogusummaelement.textContent = `Ostukorvi kogu summa: €${kogusumma.toFixed(2)}`;
});
