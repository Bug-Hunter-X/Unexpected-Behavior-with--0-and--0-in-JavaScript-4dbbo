# Unexpected Behavior with +0 and -0 in JavaScript

This repository demonstrates a common yet subtle bug in JavaScript related to how it handles positive zero (+0) and negative zero (-0).

## Bug Description
The `myFunction` function in `bug.js` aims to perform a simple division. However, it incorrectly handles the cases where either `a` or `b` is +0 or -0. This leads to unexpected results due to JavaScript's loose comparison and behavior with these special numeric values.

## Solution
The `bugSolution.js` file provides a corrected version of `myFunction`, addressing the handling of +0 and -0 to produce consistent and expected results.

## How to reproduce
1. Clone this repository.
2. Navigate to the directory.
3. Run the following command in your terminal: `node bug.js` and `node bugSolution.js`.

Compare the outputs of both files to see the difference in behavior and how the solution fixes the issue. 

## Learning Points
This bug highlights the importance of understanding JavaScript's unique handling of +0 and -0.  Strict equality (`===`) should be preferred in comparisons to avoid unexpected behavior with these values.  Be cautious when dealing with division and zero values in JavaScript.