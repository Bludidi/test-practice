const reverseString = require('./reverseString.js');

test('return a reversed string', () => {
  expect(reverseString('bad')).toBe('dab');
});
