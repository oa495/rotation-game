class Game {
  complete = false;
  shape;
  completedShapes = [];
  speed;
  length;
  points = 0;

  rotations = {
    0: {
      point: 1,
    },
    360: {
      point: 1,
    }
  };

  constructor(length) {
    this.length = length;
    this.shape = this.createShape();
  }

  completeRound() {
    this.shape.setStatus(false);
    this.completedShapes.push(this.shape);
    if (this.completedShapes.length === this.length) {
      this.complete = true;

    } else {
      setTimeout(() => {
        this.startNextRound();
      }, 5000);
    }
  }

  startNextRound() {
    this.shape.instance.remove();
    this.shape = this.createShape();
  }

  calculateRotations(numberOfSides) {
    // sean do this
  }

  checkRotation() {
    const rotation = this.shape.getRotation();
    const rotationsToTest = [Math.floor(rotation), Math.round(rotation)];
    let matchedRotation;
    let matchedExactly = this.rotations[rotation];

    if (!matchedExactly) {
      matchedRotation = rotationsToTest.filter(rotation => {
        return this.rotations[rotation];
      })[0];
    }
    if (matchedRotation || matchedExactly) {
      this.points += matchedRotation.point;
      if (matchedExactly) {
        this.points += 1;
      }
    }
  }

  createShape() {
    let speed = Math.floor(random(1,12));
    const sides = this.getSides();
    this.speed = speed;
    this.shape = new Shape(view.center, sides, 100, speed);
    this.shape.setStatus(true);
    this.calculateRotations(sides);
    return this.shape;
  }

  getSides() {
    let sides = Math.floor(random(3, 8));
    if (this.completedShapes.length === 0) return sides;
    let pastShapeIsTheSame = this.completedShapes.some(shape => {
      return shape.sides === sides;
    });

    while (pastShapeIsTheSame) {
      sides = Math.floor(random(3, 8));
      pastShapeIsTheSame = this.completedShapes.some(shape => {
        return shape.sides === sides;
      });
    }
    return sides;
  }

  currentShape() {
    return this.shapes(this.currentIndex);
  }
}