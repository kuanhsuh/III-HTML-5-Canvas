var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var radius = 30;

// Step 1 Create Circle Object
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  // Step 4
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  // Step 8 Add Color
  this.colors = ["#16a085", "#e74c3c", "#34495e"];

  // Step 3 Add Draw Function
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // Step 8 Add Color
    c.strokeStyle = "blue";
    // c.strokeStyle = this.colors[Math.floor(Math.random() * 3)];
    c.stroke();
    // c.fillStyle = this.colors[Math.floor(Math.random() * 3)];
  };

  // Step 4 Update / Create Animation
  // Add dx, dy, radius
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
// Step 6 Randomize 20 Circle

var circleArray = [];
for (var i = 0; i < 20; i++) {
  // Step 8 Circle within Canvas Border
  var radius = 30;
  var x = Math.random() * (innerWidth - this.radius * 2) + radius;
  var y = Math.random() * (innerHeight - this.radius * 2) + radius;
  // var x = Math.random() * innerWidth;
  // var y = Math.random() * innerHeight;
  var dx = (Math.random() - 0.5) * 7;
  var dy = (Math.random() - 0.5) * 7;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);
// Step 2 Create Circle Instance
// var circle = new Circle(200, 200, 3, 3, 30);
// circle.draw();

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  // circle.draw();
  // circle.update();

  // Step 7

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
