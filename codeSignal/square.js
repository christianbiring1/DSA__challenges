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

// console.log(drawSquare(7))

function MyFunction(arr1, arr2) {
  const n = arr1.length;
  const result = [];

  for(let i = 0; i < n; i += 1) {
    let sum = 0;
    const shiftArray = arr1.slice(i).concat(arr1.slice(0, i));
    console.log(shiftArray)

    for(let j = 0; j < n; j += 1) {
      sum += Math.abs(shiftArray[j] + arr2[j])
    }
    result.push(sum);
  }

  return result
}

// console.log(MyFunction([1,-2,3], [1,2,-3]))


function MyString(str1, str2) {
  for(let i = 0; i < str1.length; i += 1) {
    let char1 = str1.charCodeAt(i);
    let char2 = str2.charCodeAt(i+1)
    console.log(char1, char2)

    if(char1 === 122 && char2 === 97) {
      char2 = 123
    }
    if(char1 > char2) {
      return false
    }
  }
  return true
}

console.log(MyString('abc', 'ccd'))
// console.log(MyString('xyz', 'yza'))
// console.log(MyString('efg', 'fgh'))


