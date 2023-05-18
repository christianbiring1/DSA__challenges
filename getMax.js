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

// All the movies in 2018 with rating > 4
// Sort thm by rating
// In Descending order
// Only pich their title

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.3 },
  { title: "c", year: 2019, rating: 4.0 },
  { title: "d", year: 2018, rating: 3 },
];

const title = movies
  .filter((m) => m.year === 2018 && m.rating > 4)
  .sort((a, b) => b.rating - a.rating)
  .map((m) => m.title);

console.log(title);
