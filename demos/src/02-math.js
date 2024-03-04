const sum = (a, b) => {
  const result = a + b;
  return result;
};

const res = (a, b) => {
  const result = a - b;
  return result;
};

const multiply = (a, b) => {
  const result = a * b;
  return result;
};

const divide = (a, b) => {
  if (a === 0 || b === 0) {
    return null;
  }
  const result = a / b;
  return result;
};

module.exports = {
  sum,
  res,
  multiply,
  divide,
};
