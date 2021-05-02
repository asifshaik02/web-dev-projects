var i = 0;
var input = document.querySelector('#id');

function getText() {
    var text = document.getElementById("text").value;
    var display = document.getElementById("ul");
    if (text != '') {
        display.innerHTML += "<li><input type=\"checkbox\"><p>" + text + "</p><i id=\" " + i + "\"class=\"fas fa-trash\"></i></li>";
    }
    i++;
    input.value = '';
}

function focus() {
    input.focus();
}


document.querySelector('ul').addEventListener("click", (event) => {
    var id = event.target.attributes.id.value;
    console.log(id);
    if (id && id != 'ul') {
        var k = event.target.parentNode;
        k.remove();
    }
})

var input = document.querySelector('input');
input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        getText();
    }
})
