
function solution(D) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const result = {};

  
  for (let d of days) result[d] = null;

  
  for (const [dateStr, value] of Object.entries(D)) {
    const date = new Date(dateStr);
   
    const dayIdx = (date.getDay() + 6) % 7;
    const dayName = days[dayIdx];

    if (result[dayName] === null) result[dayName] = value;
    else result[dayName] += value;
  }


  for (let i = 0; i < days.length; i++) {
    if (result[days[i]] === null) {
      let prevIdx = (i - 1 + 7) % 7;
      while (result[days[prevIdx]] === null) {
        prevIdx = (prevIdx - 1 + 7) % 7;
      }

      let nextIdx = (i + 1) % 7;
      while (result[days[nextIdx]] === null) {
        nextIdx = (nextIdx + 1) % 7;
      }

      const avg = Math.round((result[days[prevIdx]] + result[days[nextIdx]]) / 2);
      result[days[i]] = avg;
    }
  }

  return result;
}

module.exports = solution;
