// Get the maximum number in an array of numbers

const getMax = (arr) => {
  if (arr.length === 0) return undefined;
  // let max = 0;
  // for (let i = 0; i < arr.length; i += 1) {
  //   if (arr[i] > max) max = arr[i];
  // }
  // return max;

  // OR
  return arr.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue;
  });
};

console.log(getMax([]));
