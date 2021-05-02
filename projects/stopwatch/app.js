var display = document.getElementById('display');


const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resumeBtn = document.getElementById('resume');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapDisplay = document.querySelector('ul');

var timer;

var s = 0, m = 0, ms = 0;

function start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
    startBtn.style.display = 'none';
    lapBtn.style.display = 'inline-block';
    stopBtn.style.display = 'inline-block';

}

function stop() {
    clearInterval(timer);
    lapBtn.style.display = 'none';
    stopBtn.style.display = 'none';
    resumeBtn.style.display = 'inline-block';
    resetBtn.style.display = 'inline-block';
}

var i = 1;
function lap() {
    lapDisplay.style.display = 'block';
    display.style.marginBottom = '0';
    const lapTime = display.textContent;
    const text = '<li><label>' + i + '</label>' + lapTime + '</li>';
    lapDisplay.innerHTML += text;
    i++;
}

function resume() {
    timer = setInterval(run, 10);
    lapBtn.style.display = 'inline-block';
    stopBtn.style.display = 'inline-block';
    resumeBtn.style.display = 'none';
    resetBtn.style.display = 'none';

}

function reset() {
    clearInterval(timer);
    timer = false;
    m = 0;
    s = 0;
    ms = 0;
    display.textContent = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
    startBtn.style.display = 'inline-block';
    lapBtn.style.display = 'none';
    stopBtn.style.display = 'none';
    resumeBtn.style.display = 'none';
    resetBtn.style.display = 'none';
    i = 1;
    lapDisplay.innerHTML = '<p><span>Lap</span> Lap Time</p><hr>';
    display.style.marginBottom = '310px';
    //clear all list iems added
    lapDisplay.style.display = 'none';
}



function run() {
    display.textContent = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
    ms++;
    if (ms > 100) {
        ms = 0;
        s++;
    }
    if (s > 60) {
        s = 0;
        m++;
    }
}