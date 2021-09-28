paper.install(window);
window.onload = function() {
  paper.setup('myCanvas');
  const tool = new Tool();

  const game = new Game(3);
  const shape = game.createShape();

  view.onFrame = function() {
    shape.rotate(shape.speed);
  }

  tool.onMouseDown = function() {
    if (shape.speed <= 1) {
      game.checkRotation();
    }
    if (shape.speed > 1) {
      shape.speed -= 1;
    }
  }
}

function random(min, max) {
  // min and max included
  return Math.random() * (max - min) + min;
}
