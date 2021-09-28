paper.install(window);
let game;

window.onload = function() {
  paper.setup('myCanvas');
  const tool = new Tool();
  game = new Game(3);

  view.onFrame = function() {
    if (!game.complete) {
      const shape = game.shape;
      shape.rotate(shape.speed);
    }
  }

  tool.onMouseDown = function() {
    if (!game.complete) {
      const shape = game.shape;
      if (shape.speed > 0) {
        shape.speed -= 1;
      }
      if (shape.speed === 0) {
        game.checkRotation();
        game.completeRound();
      }
    }
    else {
      console.log('Complete');
    }
  }
}


function random(min, max) {
  // min and max included
  return Math.random() * (max - min) + min;
}
