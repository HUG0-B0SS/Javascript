/*
Hugo-Hendrik vainlu
10.02.2025
Ülesanne6
*/

// Positiivne või negatiivne
let number = prompt("Sisesta number: ");
switch (true) {
    case number > 0:
        console.log("Positiivne number");
        break;
    case number < 0:
        console.log("Negatiivne number");
        break;
    case number === 0:
        console.log("Null");
        break;
}

// Restoran
let broneering = prompt("Sisesta broneeringu arv: ");
switch (true) {
    case broneering === 1:
    case broneering === 2:
        console.log("Valige laud kahele inimesele.");
        break;
    case broneering === 3:
    case broneering === 4:
        console.log("Valige laud neljale inimesele.");
        break;
    case broneering === 5:
    case broneering === 6:
        console.log("Valige laud kuuele inimesele.");
        break;
    default:
        console.log("Valige suur laud.");
}
