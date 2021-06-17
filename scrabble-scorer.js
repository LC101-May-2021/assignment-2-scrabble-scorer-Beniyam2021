 //inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function runProgram() {
   let word = initialPrompt();
   let oldScrabblePoints = oldScrabbleScorer(word);
   console.log(oldScrabblePoints);
   let simplePoints = simpleScore(word);
   console.log(simplePoints);
   let bonusScorePoints = vowelBonusScore(word);
   console.log(bonusScorePoints);
   let scorerObject = scorerPrompt();
   let score = scorerObject.scoreFunction(word);
   console.log(`The score of ${word} is ${score}`); 
}

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
      if (oldPointStructure[pointValue].includes(word[i])) {
			  letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

function initialPrompt() {
   let yourWord = input.question(`Let's play some scrabble! Enter a word to score:`);
   return yourWord;
};

let simpleScore = function (word){
  
  return word.length;
}
 /*let simpleScore = input ("point per letter) index +1 to count letters?");
  return word.length*/


let vowelBonusScore = function (word){
  word = word.toUpperCase();
  let letterPoints = 0;
  let vowels = "aeiou";
  for (let i = 0; i < word.length; i++){
      if (vowels.includes(word[i])){
        //letterPoints += Number(pointValue);
        letterPoints += 3;
        
      }else {
        letterPoints ++;
    }
  }
  return letterPoints;
}

let scrabbleScore;

const scoringAlgorithms = [
  {name: "Simple Score",
  description: "Each letter is worth 1 point. ",
  scoreFunction: simpleScore},
  {name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt. ",
  scoreFunction: vowelBonusScore},
  {name: "Scrabble",
  description: "The traditional scoring algorithm. ",
  scoreFunction: oldScrabbleScorer}];

function scorerPrompt() {
  console.log("Which scoring algorithm do you need? ");
  for (let i = 0; i < scoringAlgorithms.length; i++){
    let option = scoringAlgorithms[i];
    console.log(i + "-" + option[name] + option[description])
    return scoringAlgorithms[scoreChoice];
  }
  let questionOption = input.question("Enter 0, 1, or 2: ");


function transform() {};

let newPointStructure;

//RUN PROGRAM (CALL FUNCTION MOVED TO LINE 20 )
//function runProgram() {
   //initialPrompt();
   


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

