function sumAll(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  let total = 0;
  for (let i = min; i <= max; i++) {
    total += i;
  }

  return total;
}

function arithmeticFormula(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  const count = max - min + 1;
  return (count * (min + max)) / 2;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));

console.log(arithmeticFormula([1, 4]));
console.log(arithmeticFormula([4, 1]));
console.log(arithmeticFormula([5, 10]));
console.log(arithmeticFormula([10, 5]));