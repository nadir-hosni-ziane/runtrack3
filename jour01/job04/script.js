function bisextile(annee) {

    var annee = prompt('entrez l\'année');
    if (annee % 4 == 0) {
        alert(true);
    } else {
        alert(false);
    }
}
bisextile();