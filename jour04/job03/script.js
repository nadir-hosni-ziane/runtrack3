$("#button").click(function(e) {
    e.preventDefault();
    $.ajax({
        url: 'pokemon.json',
        type: "GET",
        dataType: 'json',
        success: function(data) {
            console.log(data);

            if (document.getElementById("id").value) {
                for (var i = 0; i < data.length; i++) {
                    var row = $('<tr><td>' + data[i].name.french + '</td><td>' + data[i].type + '</td><td>' + data[i].base.Attack + '</td></tr>');
                    if ($('#id').val() == data[i].id) {
                        $('#demo').append("<tr><th>Nom du Pokemon</th><th>Type de Pokemon</th><th>Attack</th></tr>");
                        $('#demo').append(row);
                    }
                }
            } else $('#demo').append("ecris un chiffre<br>");
        }
    });
    console.log(document.getElementById("id").value);
})