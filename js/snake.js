//Screen values
var Width = 0
var Height = 0
var unit = 0

//Setting up global variables variables
var Snake = []
var Food = []
var points = 0
var Direction = 0
var x = 0
var y = 1

//Drawing the border, initiating values
function initiation() {

    //Deciding on size of playing field on load
    if (window.innerWidth > window.innerHeight){
        unit = Math.floor(window.innerHeight / 60)
        Width = window.innerWidth / 2 - unit * 30
    }else{
        unit = Math.floor(window.innerWidth / 60)
        Height = window.innerHeight / 2 - unit * 30
    }

    //Drawing border
    var c = document.getElementById("Snake");
    c.height = window.innerHeight
    c.width = window.innerWidth
    var ctx = c.getContext("2d");
    ctx.moveTo(Width + unit * 3 - 1, Height + unit * 3 - 1);
    ctx.lineTo(Width + unit * 57 + 1, Height + unit * 3 - 1);
    ctx.lineTo(Width + unit * 57 + 1, Height + unit * 57 + 1);
    ctx.lineTo(Width + unit * 3 - 1, Height + unit * 57 + 1);
    ctx.lineTo(Width + unit * 3 - 1, Height + unit * 3 + 1);
    ctx.strokeStyle = "white";
    ctx.stroke();   
}

//Resetting values for the start of a game cycle
function start() {
    Snake = []
    Food = []
    points = 0
    SLen = 5
    //Snake generation
    Snake[0] = [Math.floor(Math.random() * 40) + 10, Math.floor(Math.random() * 40) + 10]
    for (var i = 1; i < SLen; i++){
        Snake.push([Snake[i - 1][0] - x, Snake[i - 1][1] - y])
    }

    //Food generation
    do {
        Food = [Math.floor(Math.random() * 54) + 3, Math.floor(Math.random() * 54) + 3]
    }
    while (Snake[0][0] == Food[0] && Snake[0][1] == Food[1])
}

//Snake movement
function snakeM() {
    for (var i = Snake.length - 1; i > 0; i--){
        Snake[i] = Snake[i - 1]
    }
    Snake[0] = [Snake[0][0] + x, Snake[0][1] + y]
    lock = false
}

//Redrawing snake, called upon per frame
function redraw(){
    var c = document.getElementById("Snake");
    var ctx = c.getContext("2d")
    ctx.clearRect(Width + unit * 3, Height + unit * 3,unit * 54,unit * 54 )
    ctx.fillStyle = "#FA7921"
    for (var i = 0; i < Snake.length; i++){
        ctx.fillRect(unit * Snake[i][0] + Width, unit * Snake[i][1] + Height, unit, unit)
    }
    ctx.fillStyle = "#FFF94F"
    ctx.fillRect(unit * Food[0] + Width, unit * Food[1] + Height, unit, unit);
}

//Direction logic
function DirectionDetect(e) {
    if(e.keyCode > 36 && e.keyCode < 41){
        e.preventDefault();
    }
    if(lock == false){
        e = e || window.event;
        if (e.keyCode == '38' && y != 1) {
            x = 0
            y = -1
            lock = true
        }
        else if (e.keyCode == '40' && y != -1) {
            x = 0
            y = 1
            lock = true
        }
        else if (e.keyCode == '37' && x != 1) {
           x = -1
           y = 0
           lock = true
        }
        else if (e.keyCode == '39' && x != -1) {
           x = 1
           y = 0
           lock = true
        }
    }
}

//Food check, and random relocation once eaten
function food(){
    if(Snake[0][0] == Food[0] && Snake[0][1] == Food[1]){
        Food = [Math.floor(Math.random() * 54) + 3, Math.floor(Math.random() * 54) + 3]
        points += 100
        Snake.push(Snake[Snake.length - 1])
    }
    fud = 0
    while (fud = 0){
        for(var i = 0; i < Snake.length; i++){
            if(Snake[i][0] == Food[0] && Snake[i][1] == Food[1]){
                Food = [Math.floor(Math.random() * 54) + 3, Math.floor(Math.random() * 54) + 3]
                break
            }
            if( i = Snake.length - 1){
                fud = 1
            }
        }
    }
}

//Checking if the snake has eaten itself, or the wall
function collision(){

    //Snake self collision
    for (var i = 0; i < Snake.length; i++){
        for (var j = i + 1; j < Snake.length; j++){
            if (Snake[i][0] == Snake[j][0] && Snake[i][1] == Snake[j][1]){
                return false
            }
        }
    }

    //Snake Wall detection
    if (Snake[0][0] < 3 || Snake[0][0] > 56 || Snake[0][1] < 3 || Snake[0][1] > 56){
        return false
    }else{
        return true
    }
}

//Main game loop to be called
function gameLoop(){
    food()
    snakeM()
    redraw()
    if(collision()){
        setTimeout(function(){
            gameLoop()
        }, 60)
    }else{
        alert("total points = " + points)
        initiation()
        start()
        gameLoop()
    }
}

document.onkeydown = DirectionDetect;
initiation()
start()
gameLoop()


