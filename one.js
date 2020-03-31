var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// Draw Rectangle
// positionX, positionY, width, height
// c.fillStyle = "rgba(255, 0, 0, 0.5)";
// c.fillStyle = "#2ecc71";
// c.fillRect(100, 100, 200, 100);

// Draw Line
// c.beginPath();
// c.moveTo(30, 300);
// c.lineTo(300, 300);
// c.lineTo(300, 600);
// c.strokeStyle = "#2ecc71";
// c.stroke();

// Draw Circle
// x, y, r, startAngle, endAngle, drawCounterClockwise
c.beginPath();
c.arc(200, 200, 60, 0, Math.PI * 2, false);
c.fillStyle = "pink";
c.strokeStyle = "pink";
c.fill();
c.stroke();

// Draw 6 Multiple Circle
// for loop / 6 different places
for (var i = 0; i < 7; i++) {
  var radius = 60;
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.fillStyle = "pink";
  c.strokeStyle = "pink";
  c.fill();
  c.stroke();
}
