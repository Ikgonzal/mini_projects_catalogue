let input = 'a whale of a deal!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (i= 0; i < input.length; i++) {
  input[i];
  for (j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === 'e') {
        resultArray.push(input[i]);
        resultArray.push('e');
      }
      else if (input[i] === 'u') {
        resultArray.push(input[i]);
        resultArray.push('u');
      }
      else
        resultArray.push(input[i]);
    }
  }
}

resultArray = resultArray.toString().toUpperCase();
console.log(resultArray.replace(/,/g,''));
