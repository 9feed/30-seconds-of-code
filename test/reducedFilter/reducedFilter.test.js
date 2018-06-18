const expect = require('expect');
const reducedFilter = require('./reducedFilter.js');


  test('reducedFilter is a Function', () => {
  expect(reducedFilter).toBeInstanceOf(Function);
});
  const data = [
    {
      id: 1,
      name: 'john',
      age: 24
    },
    {
      id: 2,
      name: 'mike',
      age: 50
    }
    ];
    t.deepEqual(reducedFilter(data, ['id', 'name'], item => item.age > 24), [{ id: 2, name: 'mike'}], "Filter an array of objects based on a condition while also filtering out unspecified keys.");
  
