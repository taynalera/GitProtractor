//Create a loop that will go through a number and convert each digit into words.
//Converted words should be placed in an array.
//then prints the collection of words and the total count of unique words placed

//Generate Random Number Function
function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

//Assign Random Numbers from 0-999999999999999
var random = generateRandomNumber(999999999999999); 

//Display generated Random Number
console.log("Number is: " + random);

function numToWords(num) {

    var numString = num.toString(), numLength, intArray, wordArray;
    var numberToWords = require('number-to-words');

    numLength = numString.length;
    wordArray = [];
    for (i = 0; i < numLength; i++) {
        intArray = Array.from(String(num), Number);
        wordArray[i] = numberToWords.toWords(intArray[i]);
    }
    return wordArray;
}
var words = numToWords(random);
console.log("Number in words: " + words);

  function countWordInstance(array) {
    var count = [];
    for(var i = 0; i < array.length; i++) {
        var word = array[i];
        if (count.hasOwnProperty(word)) {
            count[word]++;
        } else {
            count[word] = 1;
        }
    }
    return count;
  }
  var baseArray = new Set(words).size;
  var newArray = countWordInstance(words);
  console.log("Total Unique Words: " + baseArray);
  console.log("Each Unique Word Count:");
  console.log(newArray);

  
