// $(document).ready(function() {
//     show();
// })

$("#button").click(function() {
    show();
});

function show() {
    $('#tbody').empty();
    $.ajax({
        url: 'user.php',
        type: 'POST',
        data: 'sel=1',
        success: function(data) {

            data = JSON.parse(data);
            data.forEach(user => {
                var row = $('<tr></tr>');
                var columns = `<td>${user.id}</td><td>${user.prenom}</td><td>${user.nom}</td><td>${user.email}</td>`;
                var button = $(`<button id="${user.id}" class="del">Supprimer</button>`);
                button.on('click', function() {
                    del($(this).attr('id'));
                });
                row.append(columns);
                row.append(button);
                $('#demo').append(row);
            });
        }
    });
}

function del(id) {
    $.ajax({
        url: 'delete.php',
        type: 'POST',
        data: 'del=1&id=' + id,
        success: function(data) {
            console.log('test');
            alert('Deleted');
            show();
        }
    })
}