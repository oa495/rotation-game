class Shape {

  shapeInstance;
  _speed;

  constructor(center, sides, radius, speed) {
    this.shapeInstance = new Path.RegularPolygon(center, sides, radius);

    this.speed = speed;
    this.shapeInstance.strokeColor = 'black';
    this.shapeInstance.strokeWidth = 5;
    this.shapeInstance.setApplyMatrix(false);
  }

  set speed(speed) {
    this._speed = speed;
  }

  get speed() {
    return this._speed;
  }

  getPosition() {
    return this.shapeInstance.getRotation();
  }

  rotate() {
    this.shapeInstance.rotate(this.speed);
  }
}