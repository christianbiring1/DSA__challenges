// Move an element in an array on a different position in that array.

const move = (array, index, offset) => {
  if (index + offset >= array.length || index + offset < 0) {
    console.error("Invalid offset!");
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(index + offset, 0, element);
  return output;
};

console.log(move([1, 2, 3, 4], 0, -1));
