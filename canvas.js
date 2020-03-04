var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
// c stands for context

// fillRect(positionX, positionY, width, height)
c.fillStyle = "rgba(255, 0, 0, 0.5)";
c.fillRect(100, 100, 100, 100);
c.fillRect(300, 100, 200, 100);
console.log("hello", Math.PI);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#fa34a3";
c.stroke();

// Circle
// x, y, r, startAngle, endAngle, drawCounterClockwise
// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

for (var i = 0; i < 3; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y * i, 30, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();
}
