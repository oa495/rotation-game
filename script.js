paper.install(window);
window.onload = function() {
  paper.setup('myCanvas');
  const tool = new Tool();

  const shape = createShape();
  view.onFrame = function(event) {
    const position = shape.getPosition();
    shape.rotate(shape.speed);
  }

  tool.onMouseDown = function(event) {
    if (shape.speed > 0) {
      shape.speed -= 1;
    }
  }
}

function createShape() {
  let sides = Math.floor(random(3, 8));
  let speed = Math.floor(random(1,12));
  return new Shape(view.center, sides, 100, speed);
}

function random(min, max) {
  // min and max included
  return Math.random() * (max - min) + min;
}