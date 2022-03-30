// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) => 7
// countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6])) => 4
// countUniqueValues([])) => 0

const countUniqueValues = (arr) => {
  let uniqueSet = [...new Set(arr)];
  return uniqueSet.length;
};

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6]));
console.log(countUniqueValues([]));
