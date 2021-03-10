const div = document.getElementById("div");
var text = "";
window.addEventListener("keydown", function(event) {
    var key = event.key;
    text += key;
    if (text == "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba") {
        div.style.display = "block";
    }
})