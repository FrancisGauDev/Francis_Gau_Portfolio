//Screen values
Width = 0
Height = 0
unit = 0

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
    c.height = unit * 60 + Height
    c.width = unit * 60 + Width
    var ctx = c.getContext("2d");
    ctx.moveTo(Width + unit * 3, Height + unit * 3);
    ctx.lineTo(Width + unit * 57, Height + unit * 3);
    ctx.lineTo(Width + unit * 57, Height + unit * 57);
    ctx.lineTo(Width + unit * 3, Height + unit * 57);
    ctx.lineTo(Width + unit * 3, Height + unit * 3);
    ctx.strokeStyle = "white";
    ctx.stroke();
}

//Resetting values for the start of a game cycle
function start() {
    
}


initiation()