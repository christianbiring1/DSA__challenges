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
    console.log(arr[i] * arr[i + 1])
    greatProduct = Math.max(greatProduct, arr[i] * arr[i + 1])
  }
  return greatProduct
}

console.log(adjecentProduct([1,3,4,5]));