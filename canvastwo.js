var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
  };

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
  var radius = 30;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dy = (Math.random() - 0.5) * 8;
  var dx = (Math.random() - 0.5) * 8;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();

// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dy = (Math.random() - 0.5) * 8;
// var dx = (Math.random() - 0.5) * 8;
// var radius = 30;

// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight);

//   c.beginPath();
//   c.arc(x, y, radius, 0, Math.PI * 2, false);
//   c.strokeStyle = "blue";
//   c.stroke();

//   if (x + radius > innerWidth || x - radius < 0) {
//     dx = -dx;
//   }

//   if (y + radius > innerHeight || y - radius < 0) {
//     dy = -dy;
//   }
//   x += dx;
//   y += dy;
//   // console.log("asdf");
// }

// animate();
