//Screen values
Width = 0
Height = 0
unit = 0
Direction = 0
x = 0
y = 1

//Drawing the border, initiating values
function initiation() {
    if (window.innerWidth > window.innerHeight){
        unit = Math.floor(window.innerHeight / 60)
        Width = window.innerWidth / 2 - unit * 30
    }else{
        unit = Math.floor(window.innerWidth / 60)
        Height = window.innerHeight / 2 - unit * 30
    }
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

Snake = []
Food = []
points = 0
//Resetting values for the start of a game cycle
function start() {
    Snake = []
    Food = []
    points = 0
    SLen = 5
    //Snake generation
    Snake[0] = [Math.floor(Math.random() * 40) + 10, Math.floor(Math.random() * 40) + 10]
    for (var i = 1; i < SLen; i++){
        Snake[i] = [Snake[i - 1][0] - x, Snake[i - 1][1] - y]
    }

    //Food generation
    do {
        Food = [Math.floor(Math.random() * 56) + 2, Math.floor(Math.random() * 56) + 2]
    }
    while (Snake[0] == Food[0])
}

function snakeM() {
    for (var i = Snake.length - 1; i > 0; i--){
        Snake[i] = Snake[i - 1]
    }
    Snake[0] = [Snake[0][0] + x, Snake[0][1] + y]
}

function redraw(){
    var c = document.getElementById("Snake");
    var ctx = c.getContext("2d")
    ctx.clearRect(Width + unit * 3, Height + unit * 3,unit * 54,unit * 54 )
    ctx.fillStyle = "#FA7921"
    for (var i = 0; i < Snake.length; i++){
        ctx.fillRect(unit * Snake[i][0] + Width, unit * Snake[i][1] + Height, unit, unit);
    }
}

function DirectionDetect(e) {
    if(e.keyCode > 36 && e.keyCode < 41){
        e.preventDefault();
    }
    e = e || window.event;
    if (e.keyCode == '38' && y != 1) {
        x = 0
        y = -1
    }
    else if (e.keyCode == '40' && y != -1) {
        x = 0
        y = 1
    }
    else if (e.keyCode == '37' && x != 1) {
       x = -1
       y = 0
    }
    else if (e.keyCode == '39' && x != -1) {
       x = 1
       y = 0
    }
}

function collision(){

    for (var i = 0; i < Snake.length; i++){
        for (var j = i + 1; j < Snake.length; j++){
            if (Snake[i][0] == Snake[j][0] && Snake[i][1] == Snake[j][1]){
                return false
            }
        }
    }
    if (Snake[0][0] < 3 || Snake[0][0] > 57 || Snake[0][1] < 3 || Snake[0][1] > 57){
        return false
    }else{
        return true
    }
}

function test() {
    for (i of Snake) {
        console.log(i + " ");
    }
}

function gameLoop(){
    snakeM()
    redraw()
    if(collision()){
        setTimeout(function(){
            gameLoop()
        }, 100)
    }else{
        
    }
}

document.onkeydown = DirectionDetect;
initiation()
start()
gameLoop()


