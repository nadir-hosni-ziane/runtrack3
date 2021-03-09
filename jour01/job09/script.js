function croissant(x, y) {
    return x - y;
}

function decroissant(x, y) {
    return y - x;
}

function tri(nombres, order) {
    if (order == 'desc') {
        /// sort() permet de trier numériquement les éléments d'un tableau typé, à même ce tableau par ordre de grandeur.
        /// reverse() transpose les éléments d'un tableau : le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.
        console.log(nombres.sort(decroissant));
    } else if (order == 'asc') {
        console.log(nombres.sort(croissant));
    }

}

/// window.onload est un gestionnaire d'évènement pour l'évènement load (chargement) de la fenêtre.
window.onload = function() {
    console.log(tri([1, 28, 12, 76, 234, 768, 3], 'desc'));
}

// function croissant(x, y){
//    return x - y;
// }