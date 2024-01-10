const coutOccurencies = (array, searchElement) => {
  // let count = 0;
  // for (let i of array) if (i === searchElement) count += 1;
  // return count;

  // OR
  return array.reduce((accumulator, currentValue) => {
    const occurency = currentValue === searchElement ? 1 : 0;
    return occurency + accumulator;
  });
};

console.log(coutOccurencies([1, 2, 3, 1, 1, 1], 1));
