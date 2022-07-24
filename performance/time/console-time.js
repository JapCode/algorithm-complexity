function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
console.time("count");
count(5);
console.timeEnd("count");
