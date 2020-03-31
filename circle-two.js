var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// var x = 200;
// var y = 200;
// var dx = 5;
// var dy = 5;

// Step 7 Random Position
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
//  Stp 8 Random Velocity Math.random() - 0.5 gets 50% position/50%negative
var dx = (Math.random() - 0.5) * 7;
var dy = (Math.random() - 0.5) * 7;

// Step 4
var radius = 30;

// Step 1 先畫出圓圈

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();

  // Step 3 如果碰到牆，開始反方向
  // Step 4 Bounce off Radius Not Border Add Radius
  // if (x + radius > innerWidth) {
  //   dx = -dx;
  // }
  //  Step 5 When X becomes negative bounces again
  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }

  //  Step 6
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }

  // Step 2 加上X動畫
  x += dx;

  // Step 6 加入Y動畫
  y += dy;
}

animate();
