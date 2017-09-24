var heightJohn = 180;
var heightMike = 165;
var ageJohn = 26;
var ageMike = 29;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;

if (scoreJohn > scoreMike) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreJohn < scoreMike) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreJohn === scoreMike) {
    console.log('There is a draw.');
}