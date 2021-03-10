// keydown est déclenché lorsqu’une clé est pressée. Contrairement à l’événement keypress,
// l’événement est tiré pour toutes les touches, qu’elles produisent ou non une valeur de caractère.keydown

// event.key  Obtenez le bouton clavier qui a été appuyé lorsqu’un événement clé s’est produit :

var keylogger = document.getElementById('keylogger');
window.addEventListener("keypress", function zone() {
    var clé = event.key;
    keylogger.value += clé;
})