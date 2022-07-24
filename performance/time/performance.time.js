const performance = require("perf_hooks").performance;

function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
let start = performance.now();
count(5);
let end = performance.now();
let time = end - start;

console.log(`my time is ${time}`);
