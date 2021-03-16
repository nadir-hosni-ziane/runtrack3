$("#button").click(function() {
    $.ajax({
            url: 'expression.txt',
            type: 'get',
            dataType: 'text',
        })
        .done(function(msg) {
            var expression = "<p>" + msg + "</p>";
            $("#text").append(expression);
        })
})