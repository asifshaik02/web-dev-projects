
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});


function eval(a, b, c) {
    var result;
    switch (c) {
        case '+':
            result = parseFloat(a + b);
            break;
        case '-':
            result = parseFloat(a - b);
            break;
        case 'x':
            result = parseFloat(a * b);
            break;
        case '/':
            result = parseFloat(a / b);
            break;
        case '%':
            result = parseFloat((a / 100) * b);
        default:
            break;
    }
    clearScreen();
    addTextToArea(result);
    history(a, b, c, result);
}

function getVariables() {
    var value = text.value;
    var a = '', b = '', i = 0;
    if (value[0] == '-') {
        a += value[0];
        i++;
    }
    while (value[i] != '+' && value[i] != '-' && value[i] != '/' && value[i] != 'x' && value[i] != '%') {
        a += value[i];
        i++;
    }

    var c = value[i];

    while (i + 1 < value.length) {
        b += value[i + 1];
        i++;
    }
    a = parseFloat(a);
    b = parseFloat(b);
    eval(a, b, c);
}


function addTextToArea(c) {
    text.value += c;
}

function clearScreen() {
    text.value = '';
}

function clearSpace() {
    text.value = text.value.slice(0, -1);
}
function history(a, b, c, res) {
    var p = a + c + b + '=' + res;
    console.log(p);
    var history = document.getElementById("his");
    history.innerHTML += ' ' + p + '<br>'

}
function showHistory() {
    var h = document.getElementById("history");
    if (h.style.display === 'inline-block') {
        h.style.display = 'none';
    }
    else {
        h.style.display = 'inline-block';
    }
}