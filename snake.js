var c = document.getElementById("Snake");
c.height = 900;
c.width = 1300
c.border = "1px solid #d3d3d3;"
var ctx = c.getContext("2d");

ctx.moveTo(50, 50);
ctx.lineTo(1250, 50);
ctx.lineTo(1250, 850);
ctx.lineTo(50,850);
ctx.lineTo(50,50);
ctx.strokeStyle = "white";
ctx.stroke();