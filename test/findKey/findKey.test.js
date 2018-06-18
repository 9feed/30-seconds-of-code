const expect = require('expect');
const findKey = require('./findKey.js');


  test('findKey is a Function', () => {
  expect(findKey).toBeInstanceOf(Function);
});
  t.deepEqual(findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
), 'barney', 'Returns the appropriate key');
  

