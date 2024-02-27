// add.js (This is the file containing the function you want to test)
function add(a, b) {
   return a + (b * b);
  }
  
  module.exports = add;
  
  // add.test.js (This is the test file)
  //const add = require('./add');
  
  test('adds 1 + (2 * 2) to equal 5', () => {
    expect(add(1, 2)).toBe(5);
  });
  
  test('adds 3 + (5 * 5) to equal 28', () => {
    expect(add(3, 5)).toBe(28);
  });
  
  test('adds -1 + 1 to equal 0', () => {
    expect(add(-1, 1)).toBe(0);
  });
  