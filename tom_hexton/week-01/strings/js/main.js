console.log("--------------------\nDrEvil\n\n");
const DrEvil = function(dollars) {
  if (dollars === 1000000) {
    console.log(`${dollars} dollars. *pinky*`);
    return dollars;
  }
  console.log(`${dollars} dollars.`);
  return dollars;
}
// function called
DrEvil(1000000);

console.log('\n--------------------');


console.log("--------------------\nMixUp\n\n");
const mixUp = function(string1, string2) {
  const stringOneFirstLetter = string1.charAt(0);
  const stringTwoSliceRemainder = string2.slice(1);


  const stringTwoFirstLetter = string2.charAt(0);
  const stringOneSliceRemainder = string1.slice(1);

  const mixOne = stringTwoFirstLetter + stringOneSliceRemainder;
  const mixTwo = stringOneFirstLetter + stringTwoSliceRemainder;

  console.log(`${mixOne}, ${mixTwo}`);
}
// function called
mixUp('mix', 'pod');

console.log('\n--------------------');


console.log("--------------------\nFixStart\n\n");
