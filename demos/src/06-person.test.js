const Person = require('./06-person');

describe('person test', () => {
  let person;
  beforeEach(() => {
    person = new Person('jose', 70, 1.80);
  });

  test('overweight person', () => {
    person.weight = 80;
    expect(person.calcIMC()).toBe('overweight');
  });

  test('normal person', () => {
    person.weight = 69;
    expect(person.calcIMC()).toBe('normal');
  });

  test('down person', () => {
    person.weight = 50;
    expect(person.calcIMC()).toBe('down');
  });
});
