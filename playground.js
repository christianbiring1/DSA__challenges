function Multiplication() {
  for (let i = 0; i <= 7; i += 1) console.log("7 * " + i + " = " + 7 * i);
}

// Multiplication();

function Table(n) {
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      console.log(i + "*" + j + " = " + i * j);
    }
  }
}

// Table(10);
// Receive a string and return the corresponding 12h format
function ConvertTime(t) {
  // realhour = time - 12;
  //return realhour > 0 ? "realhour: minute PM" ? "time: minute AM"
}

console.log(ConvertTime("02:30 AM"))
