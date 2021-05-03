//Change Theme
let check = 0;
function changeTheme() {
    if(!check){
        document.documentElement.style.cssText = `--bg-color: #333a4d; --display-color:#ed3f49; --button-color:#485371`;
        check = true;
    }
    else{
        document.documentElement.style.cssText = `--bg-color: #ed3f49; --display-color:#333a4d; --button-color:#f13f4b;`;
        check = false;
    }
}

//logic

// select all the buttons
const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
const result = document.querySelector('#res');

function clearSpace() {
    display.innerHTML = display.innerHTML.slice(0,-1);
}

// add eventListener to each button
buttons.forEach(function (button) {
    button.addEventListener('click', calculate);
});

function calculate(event) {
    const buttonValue = event.target.value;
    if(buttonValue === "="){
        if(display.innerHTML !== ''){
            result.innerHTML = eval(display.innerHTML);
        }
    }
    else if(buttonValue === 'AC'){
        display.innerHTML = '';
        result.innerHTML = '0';
    }
    else if(buttonValue === '+/-'){
        if(display.innerHTML === ''){
            display.innerHTML = '-';
        }
        else if (display.innerHTML === '-'){
            display.innerHTML = '';
        }
    }
    else{
        display.innerHTML += buttonValue;
    }
}
