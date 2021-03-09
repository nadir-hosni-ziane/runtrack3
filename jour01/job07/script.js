// function jourtravaille(date) {

//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

//     // var jourferies = [
//     //     '2020-01-01',
//     //     '2020-04-13',
//     //     '2020-05-01',
//     //     '2020-05-08',
//     //     '2020-05-21',
//     //     '2020-06-01',
//     //     '2020-07-14',
//     //     '2020-08-15',
//     //     '2020-11-01',
//     //     '2020-11-11',
//     //     '2020-12-25'
//     // ]

//     // var e = date;
//     // e = e.toISOString(); /// toISOString renvoie une chaine de caractères correspondant à la date (le fragment de l'objet qui correspond à la date : jour, mois, année)
//     // var d = date.toLocaleDateString('fr-FR', options); /// toLocaleDateString renvoie une chaine de caractères correspondant à la date (le fragment de l'objet qui correspond à la date : jour, mois, année)
//     // jour = d.split(" ")[0]; /// split() permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes.

//     // if (jourferies.includes(e)) { ///  includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon
//     //     console.log(d + " est un jour ferié");
//     // } else {
//     //     console.log(d + " n'est pas un jour ferié");
//     // }

//     var ferier = ["1-1", "5-4", "1-5", "8-5", "13-5", "24-5", "14-7", "15-8", "1-11", "25-12"];
//     const day = new Date(date);

//     const date1 = day.getDate();
//     const date2 = day.getMonth() + 1;
//     var date3 = date1 + '-' + date2;
//     var text = "";
//     var i;

//     if (ferier.includes(date3)) {
//         text += day.toLocaleDateString('fr-FR', options) + " est un jour ferié<br>";
//     } else text += "oui " + day.toLocaleDateString('fr-FR', options) + " est un jour travaillé<br>";

//     document.getElementById('demo').innerHTML = text;



//     // if (jour == "samedi" | jour == "dimanche") {
//     //     console.log("Non, " + d + " est un week-end")
//     // } else {
//     //     console.log("Oui, " + d + " est un jour travaillé");
//     // }

// }

// entrer = prompt("Date : yyyy-mm-dd");

// var date = new Date(entrer);

// jourtravaille(date);

function jourtravaille(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var ferier = ["1-1", "5-4", "1-5", "8-5", "13-5", "24-5", "14-7", "15-8", "1-11", "11-11", "25-12"];
    const day = new Date(date);

    const date1 = day.getDate();
    const date2 = day.getMonth() + 1;
    var date3 = date1 + '-' + date2;
    var text = "";
    var i;

    if (ferier.includes(date3)) {
        text += day.toLocaleDateString('fr-FR', options) + " est un jour ferié<br>";
    } else text += "oui " + day.toLocaleDateString('fr-FR', options) + " est un jour travaillé<br>";
    if (day.getDay() == 0 || day.getDay() == 6) {
        text += "Non " + day.toLocaleDateString('fr-FR', options) + " est un week-end<br>";
    }

    document.getElementById('demo').innerHTML = text;
}