var jsonval = '{ "name": "La Plateforme_", "addresse": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019" }';


function jsonValueKey(pizza, key) {
    var obj = JSON.parse(pizza);
    return obj[key];
}

console.log(jsonValueKey(jsonval, 'city'));
document.getElementById('demo').innerHTML = jsonValueKey(jsonval, 'city');