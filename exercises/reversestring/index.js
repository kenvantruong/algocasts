// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ---METHOD 1 (Longer Verison)------
function reverse(str) {
  let answer;
  answer = str.split('');
  answer.reverse();
  str = answer.join('');

	return str;
}

  console.log(reverse('Longer Verison'));

  module.exports = reverse;



// ---METHOD 1 (Shorter Verison)------
function reverse(str) {
  return str.split('').reverse().join('');

}

  console.log(reverse('METHOD ONE'));

  module.exports = reverse;


// ---METHOD 2------
function reverse(str) {
  let reversed = '';

  for(let character of str) {
    reversed = character + reversed;
  }
  
  return reversed;
}

console.log(reverse('HAPPY BIRTHDAY'));



module.exports = reverse;