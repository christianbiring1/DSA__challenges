function showStars(limit) {
  for (let row = 1; row <= limit; row += 1) {
    let str = "";
    for (let i = 1; i <= row; i += 1) {
      str += "*";
    }
    console.log(str);
  }
}

showStars(5);
