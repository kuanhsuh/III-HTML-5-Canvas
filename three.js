var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// Step 1 Draw Circle

function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  // Step 3 Circle Draw Function
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = color;
    c.strokeStyle = color;
    c.fill();
    // console.log("draw");
    c.stroke();
  };

  // Step 4 Circle Update / Create Animation
  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // Step 5 add draw
    this.draw();
  };
}

// Step 2 Circle Instance
var circle = new Circle(200, 200, 6, 6, 30);
// circle.draw();

// Step 6 Create 20 Moving Balls
var circleArray = [];
var palettes = ["#16a085", "#e74c3c", "#34495e"];
for (var i = 0; i < 20; i++) {
  // Step 7 Add Random x, y, velocity
  var x = Math.random() * innerWidth;
  var y = Math.random() * innerHeight;
  var radius = 60;
  var dx = (Math.random() - 0.5) * 10;
  var dy = (Math.random() - 0.5) * 10;

  var color = palettes[Math.floor(Math.random() * 3)];

  circleArray.push(new Circle(x, y, dx, dy, 30, color));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  // circle.update();
  // circle.draw();

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
