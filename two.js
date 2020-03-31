var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// Step 1 Draw Circle
// Step 2 Move in X direction
// Step 3 如果碰到牆，開始反方向
// Step 4 Add Radius
// Step 5 When X becomes Negative bounces positive again
// Step 6 Y add velocity
// Step 7 Add Random X, Y, Velocity

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var radius = 60;
//  Stp 8 Random Velocity Math.random() - 0.5 gets 50% position/50%negative

var dx = (Math.random() - 0.5) * 50;
var dy = (Math.random() - 0.5) * 50;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.fillStyle = "pink";
  c.strokeStyle = "pink";
  c.fill();
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

animate();
