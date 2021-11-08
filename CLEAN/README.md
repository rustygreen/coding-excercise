# Clean Code Exercises
The purpose of the examples within the "CLEAN" folder are to provide Rizing with the confidence that the candidate has a strong understanding of [CLEAN code and SOLID principles](https://www.freecodecamp.org/news/clean-coding-for-beginners/).

## Directions
The candidate should go through each file in the "CLEAN" folder and look at the code as if you are doing a code review or refactoring the code. Each file should be refactored to better adhere to CLEAN code and SOLID principles. In most cases the code is not complete and it is not necessary for it to have any additional completeness or any additional context. Each file breaks rule(s) from CLEAN code. Your job is to fix them as simply as possible. Document any thought processes you have or comments on your thoughts within the file.

## Example
Below is an example.

```typescript
// BAD - original code
function between(a1: number, a2: number, a3: number): boolean {
  return a2 <= a1 && a1 <= a3;
}

// GOOD - refactored code
// Use meaningful variable names.
// Distinguish names in such a way that the reader knows what the differences offer.
function between(value: number, left: number, right: number): boolean {
  return left <= value && value <= right;
}
```