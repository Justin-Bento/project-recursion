function fibonacciIter(n) {
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}
console.log(fibonacciIter(8));

function fibonacciRec(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}
console.log(fibonacciRec(7));
