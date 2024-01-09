function drawSquare(n) {
  const output = [];
  const pattern = "*".repeat(n);
  const middlePattern = `*${" ".repeat(n - 2)}*`;

  for(let row = 0; row < n; row += 1) {
    if(row === 0 || row === n - 1) {
      output.push(pattern);
    } else {
      output.push(middlePattern)
    }
  }

  return output
}

console.log(drawSquare(7))