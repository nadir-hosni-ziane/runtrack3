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