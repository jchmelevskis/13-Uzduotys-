// PIRMA UŽDUOTIS
// Parašykite scriptą, kuris paprašytų įvesti: prekės kainą, paklaustų ar reikalingas pristatymas, jei reikalingas - paklaustų miesto į kurį reiks pristatyti. Naudokit do while loop, kol kažką įrašys arba įrašys teisingai ir if bei else kad patikrintų ką įrašys.

// "Įveskite prekės kainą";
// "Ar reikalingas pristatymas į namus? (taip/ne)";
// "Į kurį miestą reiks pristatyti?"

// Galiausiai atspausdintų tokią informaciją:

// ---
// 1 variantas (be pristatymo)

// Prekės kaina: xx.xx €
// Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a

// 2 variantas (su pristatymu)

// Prekės kaina : xx.xx €
// Pristatymas: xx.xx €
// Iš viso: xx.xx €
// Prekę pristatysime į "įvestas miestas" per 1-3 dienas.


kaina = Number(kaina)

while(isNaN(kaina) || kaina <= 0){
var kaina = prompt("Įveskite prekės kainą")
kaina = Number(kaina)
}
console.log("Prekės kaina:" + kaina.toFixed(2) + " €")

var Pristatymas = 2.50 

var isViso = kaina + Pristatymas
// console.log("Pristatymas:" + Pristatymas.toFixed(2) + " €")
// console.log("Iš viso:" + isViso.toFixed(2) + " €")

// var pristatymas = confirm("Ar reikalingas pristatymas į namus")
if (confirm("Ar reikalingas pristatymas į namus?")) {
    // Save it!
    var miestas = prompt("Į kurį miestą reiks pristatyti?");
    console.log("Pristatymas:" + Pristatymas.toFixed(2) + " €")
    console.log("Iš viso:" + isViso.toFixed(2) + " €")
    console.log("Prekę pristatysime į: " + miestas + " per 1-3 dienas ")
  } else {
    // Do nothing!
    console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a");
  }




// var miestas = prompt("Į kurį miestą reiks pristatyti?")

