export default class InvalidGridSize extends Error {
  constructor(expected: number, actual: number) {
    super(`invalid tiles length, got ${actual} instead of ${expected}`);
  }
}
