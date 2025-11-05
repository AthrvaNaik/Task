# 🧮 JavaScript Function — Weekday Aggregation & Interpolation

## 🧠 Problem Description

You are given a **dictionary `D`**, where:
- Each **key** is a date string in the format `YYYY-MM-DD`
- Each **value** is an integer

You need to write a function `solution(D)` in JavaScript that returns a **new dictionary** with:
1. Keys as **weekday names**: `"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"`
2. Values as the **sum of all integer values** that fall on that weekday.
3. If any weekday is **missing** in the input, fill its value as the **mean (average)** of the previous and next available weekdays.

---

## ⚙️ Function Signature

```js
function solution(D) {
  // implementation
}
✅ Requirements & Assumptions
Input dictionary will always have at least Monday and Sunday present.

Date keys will be valid ISO date strings within [1970-01-01, 2100-01-01].

Value range: [-1,000,000 … 1,000,000]

If multiple entries fall on the same weekday, their values must be summed.

Missing weekdays must be interpolated using the average of the previous and next weekday values.

🧩 Example 1
Input
js
Copy code
{
  '2020-01-01': 4,
  '2020-01-02': 4,
  '2020-01-03': 6,
  '2020-01-04': 8,
  '2020-01-05': 2,
  '2020-01-06': -6,
  '2020-01-07': 2,
  '2020-01-08': -2
}
Output
js
Copy code
{
  'Mon': -6,
  'Tue': 2,
  'Wed': 4,
  'Thu': 4,
  'Fri': 6,
  'Sat': 8,
  'Sun': 2
}
🧩 Example 2 (With Missing Days)
Input
js
Copy code
{
  '2020-01-06': 6,
  '2020-01-04': 12,
  '2020-01-05': 14,
  '2020-01-02': 2,
  '2020-01-07': 4
}
Explanation
Thursday (Thu) and Friday (Fri) are missing.

Interpolate using mean of surrounding days:

Thu = (Wed + Sat) / 2 = (4 + 12)/2 = 8

Fri = (Thu + Sat) / 2 = (8 + 12)/2 = 10

Output
js
Copy code
{
  'Mon': 6,
  'Tue': 2,
  'Wed': 4,
  'Thu': 8,
  'Fri': 10,
  'Sat': 12,
  'Sun': 14
}
🧠 Approach
Initialize a result object for weekdays:

js
Copy code
{ Mon: null, Tue: null, Wed: null, Thu: null, Fri: null, Sat: null, Sun: null }
Convert each date string into a JavaScript Date object, determine its weekday using:

js
Copy code
const dayIdx = (date.getDay() + 6) % 7; // converts Sunday (0) → 6
Sum values per weekday.

For missing weekdays (null values):

Find nearest previous and next available day.

Fill missing day using their mean (rounded).

Return the final result dictionary.

🧾 Project Structure
arduino
Copy code
weekday-aggregation-js/
│
├── solution.js     # main implementation
├── test.js         # test cases (run with node)
└── README.md       # this file
🧪 How to Run
1️⃣ Clone Repository
bash
Copy code
git clone <your-repo-url>
cd weekday-aggregation-js
2️⃣ Run the Tests
bash
Copy code
node test.js
3️⃣ Expected Output
bash
Copy code
Test 1 Output: { Mon: -6, Tue: 2, Wed: 4, Thu: 4, Fri: 6, Sat: 8, Sun: 2 }
Test 2 Output: { Mon: 6, Tue: 2, Wed: 4, Thu: 8, Fri: 10, Sat: 12, Sun: 14 }
Test 3 Output: { Mon: 8, Tue: 5, Wed: 10, Thu: 7, Fri: 10, Sat: 9, Sun: 9 }  // example output
🧰 Technologies Used
Language: JavaScript (Node.js)

Date Handling: Built-in Date object

Testing: Console-based or Jest (optional)

