const {
  sum, res, multiply, divide,
} = require('./02-math');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(res(1, 2)).toBe(-1);
});

test('adds 1 + 2 to equal 3', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('adds 1 + 2 to equal 3', () => {
  expect(divide(1, 2)).toBe(0.5);
  expect(divide(1, 0)).toBeNull();
  expect(divide(0, 1)).toBeNull();
});
