// Old Style

function Plane(wings) {
  this.wings = wings;
  this.isActive = false;
}

Plane.prototype.start = function () {
  console.log(`OLD | Starting with ${this.wings} ...`);
  this.isActive = true;
}
Plane.prototype.checkStatus = function () {
  console.log('OLD | ' + this.isActive ? 'Activated' : 'Not activated');
}

function SmallPlane(wings) {
  Plane.call(this, 2);
  this.start();
}

SmallPlane.prototype = Object.create(Plane.prototype);

function BigPlane() {
  Plane.call(this, 4);
  this.start();
}

BigPlane.prototype = Object.create(Plane.prototype);

const plane1 = new SmallPlane();
plane1.checkStatus();
const plane2 = new BigPlane();
plane2.checkStatus();

// New Style

class PlaneES6 {
  constructor(wings) {
    this.wings = wings;
    this.isActive = false;
  }

  start() {
    console.log(`ES6 | Starting with ${this.wings} ...`);
    this.isActive = true;
  }

  checkStatus() {
    console.log(`ES6 | ${this.isActive ? 'Activated' : 'Not activated'}`);
  }
}

class SmallPlaneES6 extends PlaneES6 {
  constructor() {
    super(2);
    this.start();
  }
}

class BigPlaneES6 extends PlaneES6 {
  constructor() {
    super(4);
    this.start();
  }
}

const plane1es6 = new SmallPlaneES6();
plane1es6.checkStatus();
const plane2es6 = new BigPlaneES6();
plane2es6.checkStatus();