function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function repeat(array) {
  let arrayRepeat = array;
  return arrayRepeat;
}
function convertToString(array) {
  let result = array.map((element) => element.toString());
  return result;
}
console.log(convertToString([1, 2, 3, 4, 5]));

// space complexity
function twoDimensions(value) {
  let x = new Array(value);
  for (let i = 0; i < value; i++) {
    x[i] = new Array(value).fill(0);
  }
  return x;
}
console.log(twoDimensions(5));
