$("#changeText").click(function() {
    var text = document.getElementById('text').textContent;
    console.log(text);
})

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function() {
    myInput.focus()
})