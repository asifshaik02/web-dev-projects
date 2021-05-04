const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const scale = 10;
let x = 0;
let y = 0;
let total=0;
let tail=[];

const rows = canvas.height / scale;
const columns = canvas.width / scale;
var xSpeed = scale * 1;
var ySpeed = 0;
var Hscore ;

fruit=new Fruit();

addEventListener('keydown',((evt) => {
    const direction = evt.key.replace('Arrow','');
    changeDirection(direction);
}))
function draw() {
    ctx.fillStyle="white";

    for (let i = 0; i < tail.length; i++){
    ctx.fillRect(tail[i].x,tail[i].y,scale,scale);
    }
    ctx.fillRect(x,y,scale,scale);
}
fruit.location();
let game= setInterval(()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    fruit.drawFruit();
    update();
    draw();
    
    if(eat(fruit)){
        fruit.location();
    }
    collide();
},150);

function update() {

    for (let i = 0; i < tail.length -1; i++) {
        tail[i] = tail[i+1];  
    }

    tail[total-1]={x:x, y:y};

    x+= xSpeed;
    y+= ySpeed;

    if (x > canvas.width) {
        x=0;
    }
    if (y > canvas.height) {
        y=0;
    }
    if (x < 0) {
        x=canvas.width;
    }
    if (y < 0) {
        y=canvas.height;
    }
}

function changeDirection(direction){
    switch (direction) {
        case 'Up':
            xSpeed = 0;
            ySpeed = -scale*1;
            break;
        case 'Down':
            xSpeed = 0;
            ySpeed = scale*1;
            break;
        case 'Left':
            xSpeed = -scale*1;
            ySpeed = 0;
            break;
        case 'Right':
            xSpeed = scale*1;
            ySpeed = 0;
            break;
        case 'w':
            xSpeed = 0;
            ySpeed = -scale*1;
            break;
        case 's':
            xSpeed = 0;
            ySpeed = scale*1;
            break;
        case 'a':
            xSpeed = -scale*1;
            ySpeed = 0;
            break;
        case 'd':
            xSpeed = scale*1;
            ySpeed = 0;
            break;
    }
}

function Fruit() {
    this.x;
    this.y;
    this.location=function(){
        this.x=(Math.floor(Math.random()*rows+1)-1)*scale;
        this.y=(Math.floor(Math.random()*columns+1)-1)*scale;
    }
    this.drawFruit=function() {
        ctx.fillStyle="red";
        ctx.fillRect(this.x,this.y,scale,scale);
    }
    
}
this.eat=function(fruit) {
    if (x === fruit.x && y=== fruit.y) {
        total++;
        this.document.getElementById("score").innerHTML=total;
        return true;
    }
    return false;
}
function collide() {
    for (let i = 0; i < tail.length; i++) {
        if (x === tail[i].x && y === tail[i].y) {
            if (this.document.getElementById("Hscore").innerHTML <= total) {
                this.document.getElementById("Hscore").innerHTML=total;
            }
            total = 0;
            tail=[];
            this.document.getElementById("score").innerHTML=total;     
        }
        
    }
}


