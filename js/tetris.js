var canvas = []
var points = 0
var Width = 0
var Height = 0

function start(){
    points = 0

    for (var i = 0; i < 20; i++){
        var temp = []
        for (var j = 0; j < 10; j++){
            temp.push(0)
        }
        canvas.push(temp)
    }

    if (window.innerWidth > window.innerHeight){ 
        unit = Math.floor(window.innerHeight / 22)
        Width = window.innerWidth / 2 - unit * 7
    }else{
        unit = Math.floor(window.innerWidth / 12)
        Height = window.innerHeight / 2 - unit * 13
    }
    var c = document.getElementById("Tetris");
    c.height = window.innerHeight
    c.width = window.innerWidth
    var ctx = c.getContext("2d");
    ctx.moveTo(Width + unit * 2 - 1, Height + unit * 2 - 1);
    ctx.lineTo(Width + unit * 14 + 1, Height + unit * 2 - 1);
    ctx.lineTo(Width + unit * 14 + 1, Height + unit * 24 + 1);  
    ctx.lineTo(Width + unit * 2 - 1, Height + unit * 24 + 1);
    ctx.lineTo(Width + unit * 2 - 1, Height + unit * 2 + 1);
    ctx.strokeStyle = "white";
    ctx.stroke();    
}

var shapes = [[[0,0,0,0],[]]]

start()
