var guessCount = 0; //initiate global count correct
var prevValue = "neutral"; //initiate previous value variable

var randGen = function () {
  var randNum = Math.random() * 3; //0 up to until 3
  randNum = Math.floor(randNum); //become integer 0 to 2.
  randNum = randNum + 2; // integer 2 to 4.
  return randNum;
};
var reqGuess = randGen(); //current random guess

var comGuess = function () {
  // 0: "banana"; 1: "chisel"; 2: "faucet"
  var diceRoll = Math.random() * 3; //up to until 3
  diceRoll = Math.floor(diceRoll); //become integer 0 to 2.
  return diceRoll;
};

var textToNum = function (Text) {
  if (Text == "banana") {
    return 0;
  }
  if (Text == "chisel") {
    return 1;
  }
  if (Text == "faucet") {
    return 2;
  }
};

var comparator = function (userInput, comInput) {
  console.log(userInput, comInput);
  if (userInput == comInput) {
    guessCount = guessCount + 1; //increase guess count
    prevValue = "correct"; //track correct with a win
    return "correct";
  }
  prevValue = "neutral"; //reset previous value
  guessCount = 0; //reset
  return "wrong";
};

var main = function (input) {
  var input = textToNum(input.toLowerCase()); //converts text to number
  var comOutput = comGuess(); //generates are random number from 0-2
  var result = comparator(input, comOutput);
  var myOutputValue =
    result +
    `. You need to guess correctly ${reqGuess}. You have accumulated ${guessCount} of wins in a row`;
  console.log("# of Wins: " + guessCount);
  console.log("preValue: " + prevValue);
  console.log("reqGuess: " + reqGuess);
  if (guessCount == reqGuess && prevValue == "correct") {
    myOutputValue = `Congrats you won! You have guessed correctly ${guessCount} times! Game reset. You have accumulated ${guessCount} wins in a row.`;
    reqGuess = randGen(); //random guess reset
  }
  return myOutputValue;
};

// Functional Breakdown:
// 1. Computer randomly chooses word (DONE)
// 2. Take user input into number to compare with (1) (DONE)
// 3. Check that player guess correctly twice (DONE)
// 4. Store global variable on the guess count correctly. (DONE)
