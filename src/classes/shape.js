export default class Shape {
  _instance;
  _speed;
  active = false;
  sides;

  constructor(center, sides, radius, speed) {
    this.sides = sides;
    this.instance = new Path.RegularPolygon(center, sides, radius);

    this.speed = speed;
    this.instance.strokeColor = 'black';
    this.instance.strokeWidth = 5;
    this.instance.setApplyMatrix(false);
  }

  get instance() {
    return this._instance;
  }

  set instance(instance) {
    this._instance = instance;
  }

  set speed(speed) {
    this._speed = speed;
  }

  get speed() {
    return this._speed;
  }

  getRotation() {
    return this.instance.getRotation();
  }

  rotate() {
    this.instance.rotate(this.speed);
  }

  setStatus(status) {
    this.active = status;
  }
}