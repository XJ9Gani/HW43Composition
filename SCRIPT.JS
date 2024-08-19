class Engine {
  start() {
    console.log("Engine started");
  }
}
class Wheel {
  rotate() {
    console.log("Wheel rotating");
  }
}

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.engine = new Engine();
    this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  start() {
    this.engine.start();
    this.wheels.forEach((wheel) => wheel.rotate());
  }

  displayInfo() {
    return `Car: ${this.make} ${this.model}`;
  }
}

const car = new Car("Honda", "Civic");
car.start();
console.log(car.displayInfo());
