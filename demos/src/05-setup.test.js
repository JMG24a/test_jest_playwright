let counter = 1;
let counter2 = 1;

describe('group 1', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });

  afterAll(() => {
    console.log('afterAll');
  });

  beforeEach(() => {
    console.log(counter);
    counter += 1;
  });

  afterEach(() => {
    console.log(counter2);
    counter2 += 1;
  });

  test('test 1', () => {
    expect(1 + 1).toBe(2);
  });
  test('test 2', () => {
    expect(1 + 1).toBe(2);
  });

  describe('group 2', () => {
    test('test 3', () => {
      expect(1 + 1).toBe(2);
    });

    test('test 4', () => {
      expect(1 + 1).toBe(2);
    });

    test('test 5', () => {
      expect(1 + 1).toBe(2);
    });
  });
});
