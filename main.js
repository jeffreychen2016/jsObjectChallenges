/*------------------- Challenge 1 -------------------*/
var players = 
[
    { name: "Bob", scores: [10, 65] }, 
    { name: "Bill", scores: [90, 5] }, 
    { name: "Charlie", scores: [40, 55] }
]; // Displays "Bill"
var players = 
[
    { name: "Bob", scores: [15, 20] }, 
    { name: "Bill", scores: [10, 15] }, 
    { name: "Charlie", scores: [90, 10] }
]; // Displays "Charlie"

//sum up total score for each person
//then find the higest score
//compare each person's score with highest score, then output the name key.
var personalScore = 0;
var sortingScore = [];
for(var j = 0; j < players.length; j++)
{
    for(var i = 0; i < players[j].scores[i]; i++)
    {
        personalScore += players[j].scores[i];
    }
    players[j].scores = personalScore;
    sortingScore.push(players[j].scores);
    personalScore = 0;
}

sortingScore.sort(function compareNumbers(a, b) {
    return a - b;
  });

var highestScore = sortingScore[sortingScore.length - 1];

for(var k = 0; players.length; k <  k++)
{
    if(players[k].scores == highestScore && highestScore <= 100)
    {
        console.log(players[k].name);
        break;
    }
}

