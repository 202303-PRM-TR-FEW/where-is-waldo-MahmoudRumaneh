const example = [
  ["Ali", "Ahmad", "Ahmad"],
  ["Ahmad", "Ahmad", "Ahmad"],
  ["Ahmad", "Ahmad", "Ahmad"]
]

const whereIsWaldo = (arr) => {
  const diff = arr[0][0];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== diff) {
        return [i + 1, j + 1];
      }
    }
  }
}

console.log(whereIsWaldo(example))
