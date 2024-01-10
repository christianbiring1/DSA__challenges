function countTruthy(array) {
  let count = 0;
  for (let element of array) {
    if (element) count += 1;
  }
  return count;
}

console.log(countTruthy([1, 2, 0, null, undefined, 3, 5]));
