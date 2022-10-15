const capitalize = require('./StringCapital.js')

test('expected the string to be capitalized = "Banana" ', () => {
    //Arrange
    const str = 'banana';
    //Act 
    const capitalizedStr = capitalize(str);
    //Assert
    expect(capitalizedStr).toBe('Banana');
  })