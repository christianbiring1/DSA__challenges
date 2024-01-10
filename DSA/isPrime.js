function isPrime(limit) {
  for (let number = 2; number <= limit; number += 1) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor += 1) {
      if (number % factor === 0) isPrime = false;
    }
    if (isPrime) console.log(number);
  }
}

isPrime(50);
