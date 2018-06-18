const expect = require('expect');
const minBy = require('./minBy.js');


  test('minBy is a Function', () => {
  expect(minBy).toBeInstanceOf(Function);
});
  test('Produces the right result with a function', () => {
  expect(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n), 2).toBe()
});
  test('Produces the right result with a property name', () => {
  expect(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'), 2).toBe()
});
  

