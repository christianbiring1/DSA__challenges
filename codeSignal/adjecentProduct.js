/* Q: Given an array of integers, find the pair of adjacent elements that
     has the largest product and return that product. */

function adjecentProduct(arr) {
  // let greatProduct = 0;
  // for(let i = 0; i < arr.length; i += 1) {
  //   const product = arr[i] * arr[i + 1]

  //   if(product > greatProduct)
  //     greatProduct = product
  // }
  // return greatProduct

  let greatProduct = arr[0] * arr[1];
  for(let i = 1; i < arr.length - 1; i += 1) {
    greatProduct = Math.max(greatProduct, arr[i] * arr[i + 1])
  }
  return greatProduct
}

// console.log(adjecentProduct([1,3,4,5]));

function makeArrayConsecutive2(statues) {
    return Math.max(...statues) - Math.min(...statues) - statues.length + 1
}

// console.log(makeArrayConsecutive2([2,4,6,7]));

function StringSuff(str) {
  let count = 0;
  function isSuffix(word, suffix) {
    return word.endsWith(suffix) && suffix.length < word.length;
  }

  function isPreffix(word, preffix) {
    return word.startsWith(preffix) && preffix.length < word.length
  };

  for(let i = 0; i < str.length; i += 1) {
    for(let j = 0; j < str.length; j += 1) {
      if( i !== j && isSuffix(str[i], str[j]) || isPreffix(str[i], str[j])) {
        count ++;
        // break
      }
    }
  }

  return count;
}

console.log(StringSuff(["back", "backdoor", "door"]))
console.log(StringSuff(["black", "blackcoffee", "backdoor", "door"]))
console.log(StringSuff(["ab", "b", "bda", "a", "da"]))



