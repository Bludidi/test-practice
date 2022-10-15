const stringLength = require('./stringLength.js');

test('return length of a string', () => {
  expect(stringLength('bad')).toBe(3);
});


