function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This will cause unexpected behavior if a or b is -0
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Output: Infinity
console.log(myFunction(10, -0)); // Output: -Infinity
console.log(myFunction(-0, 10)); // Output: -0
console.log(myFunction(-0, -10)); // Output: 0