function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine

function printNumbersInfinite(n: number): void {
  for (let i = 1; ; i++) {
    if (i > n) {
      break; // Added break statement to fix the infinite loop
    }
    console.log(i);
  }
}

printNumbersInfinite(5); // Should print 1 to 5, but was in an infinite loop