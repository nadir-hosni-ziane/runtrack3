function afficherjourssemaines() {
    var jourssemaines = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedis', 'dimanche'];

    for (i = 0; i <= 6; i++) {
        document.write(jourssemaines[i], "<br>");
        console.log(jourssemaines[i]);
    }
}
afficherjourssemaines();