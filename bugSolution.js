function myFunction(a, b) {
  if (a === 0 && b === 0) {
    return NaN; // Handle the case where both a and b are 0
  } else if (b === 0) {
    return Infinity * Math.sign(a); // Handle division by zero
  } else {
    return a / b;
  }
}

console.log(myFunction(10, 0)); // Output: Infinity
console.log(myFunction(10, -0)); // Output: -Infinity
console.log(myFunction(-0, 10)); // Output: -0
console.log(myFunction(-0, -10)); // Output: 0
console.log(myFunction(0,0)); // Output: NaN