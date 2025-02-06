# Type 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript error: assigning an array of strings to a variable expecting a single string.  The `greeter` function expects a single string, but an array is passed, resulting in a type error.  The solution demonstrates how to correctly handle this using array destructuring or iteration.

## Setup

1. Clone this repository.
2. Navigate to the project directory.
3. Run `tsc` to compile the TypeScript code.
4. Run `node bug.js` (or `node bugSolution.js` for the solution).