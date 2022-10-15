const reverseString = (string) => {
  let reversedStr = string.split('').reverse().join('');
  // console.log(reversedStr);
  return reversedStr;
 }
 
 reverseString('nomaphelo');

 module.exports = reverseString;