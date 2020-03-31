var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var x = 200;
var dx = 5;

// Step 4
var radius = 30;

// Step 1 先畫出圓圈

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, 200, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();
  // Step 2 加上X動畫
  x += dx;

  // Step 3 如果碰到牆，開始反方向
  // Step 4 Bounce off Radius Not Border Add Radius
  // if (x + radius > innerWidth) {
  //   dx = -dx;
  // }
  //  Step 5 When X becomes negative bounces again
  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
}

animate();
