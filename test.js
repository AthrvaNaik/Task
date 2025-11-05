// test.js
const solution = require('./solution');

const D1 = {
  '2020-01-01': 4,
  '2020-01-02': 4,
  '2020-01-03': 6,
  '2020-01-04': 8,
  '2020-01-05': 2,
  '2020-01-06': -6,
  '2020-01-07': 2,
  '2020-01-08': -2
};
console.log("Test 1 Output:", solution(D1));
// Expected: { Mon: -6, Tue: 2, Wed: 4, Thu: 4, Fri: 6, Sat: 8, Sun: 2 }


// Test 2: Missing Thu & Fri (interpolation)
const D2 = {
  '2020-01-06': 6,
  '2020-01-04': 12,
  '2020-01-05': 14,
  '2020-01-02': 2,
  '2020-01-07': 4
};
console.log("Test 2 Output:", solution(D2));
// Expected: { Mon: 6, Tue: 2, Wed: 4, Thu: 8, Fri: 10, Sat: 12, Sun: 14 }


// Test 3: Multiple entries on same weekday
const D3 = {
  '2020-01-01': 5,  // Wed
  '2020-01-08': 5,  // Wed
  '2020-01-02': 3,  // Thu
  '2020-01-09': 2,  // Thu
  '2020-01-03': 10, // Fri
};
console.log("Test 3 Output:", solution(D3));
// Expected: Wed:10, Thu:5, Fri:10, rest interpolated

