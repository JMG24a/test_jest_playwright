test('test obj', () => {
  const data = { name: 'jose' };
  data.lastName = 'morales';
  expect(data).toEqual({ name: 'jose', lastName: 'morales' });
});

test('test null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('test boolean', () => {
  let data = false;
  expect(data).toBe(false);
  expect(data).toEqual(false);

  expect(data).toBeFalsy();
  expect('').toBeFalsy();
  expect(0).toBeFalsy();
  data = true;
  expect(data).toBe(true);
});

test('test string', () => {
  expect('christoph').toMatch(/stop/);
});

test('test array', () => {
  const numbers = [1, 2, 3, 4];
  expect('christoph').toMatch(/stop/);

  expect(numbers).toContain(2);
});
