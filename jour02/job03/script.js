    // La propriété textContent  représente le contenu textuel d'un nœud et de ses descendants.

    // addEventListener() d'EventTarget installe une fonction à appeler chaque fois que l'événement spécifié est envoyé à la cible. Les cibles courantes sont un Element,
    //  le Document lui-même et une Window, mais elle peut être tout objet prenant en charge les évènements (comme XMLHttpRequest).
    // addEventListener() fonctionne en ajoutant une fonction, ou un objet implémentant EventListener, à la liste des écouteurs d'évènements du type d'évènement
    //  spécifié dans la EventTarget dans laquelle il est appelé.

    var compt = 0;
    var button = document.getElementById("button");
    button.addEventListener("click", function addone() {
        document.getElementById("compteur").textContent = ++compt;
    });