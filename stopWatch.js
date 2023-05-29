// This is an exercice using OOP to implement a timer in JavaScript.

function StopWatch() {
  let startTime,
    stopTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("The timer has already started counting");

    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("The timer has already stopped couting!");

    running = false;
    stopTime = new Date();

    const seconds = (stopTime.getTime() - startTime.getTime()) / 1000; // Calculate the time and convert it in second

    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    stopTime = null;
    running = false;
    duration = 0;
  };
  // Here I''m defining an read-only property of the newly created object
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
// To call the stopWatch we instatiate it to an Object like:

const watch = new StopWatch();
console.log(watch.duration);
