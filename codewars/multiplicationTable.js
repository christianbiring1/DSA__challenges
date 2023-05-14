const multiplicationTable = (size) => {
  // [[1]] ---> size = 1
  // [[1, 2], [2, 4]] ---> size = 2
  // [[1, 2, 3], [2, 4, 6], [3, 6, 9]] --> size = 3
  // [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 16, 20]] --> size = 4

  const table = [];
  for(let row = 1; row <= size; row += 1) {
    let innerTable = [];
    for(let column = 1; column <= size; column += 1) {
      innerTable.push(row * column);
    }
    table.push(innerTable)
  }

  return table;
}

console.log(multiplicationTable(4))