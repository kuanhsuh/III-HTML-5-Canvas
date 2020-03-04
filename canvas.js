var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
// c stands for context

// fillRect(positionX, positionY, width, height)
c.fillRect(100, 100, 100, 100);
c.fillRect(300, 100, 200, 100);
console.log("hello", canvas);
