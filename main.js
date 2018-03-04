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
    if(players[k].scores == highestScore)
    {
        var domString = '<h1>' + players[k].name + '</h1>';
        document.getElementById('challenge-1').innerHTML = domString;
        break;
    }
}
/*------------------- Challenge 2 -------------------*/
var winnerList = [
    {season: '1999-2000', team: 'Real Madrid', country: 'Spain'},
    {season: '2000-2001', team: 'Bayern Munich', country: 'Germany'},
    {season: '2001-2002', team: 'Real Madrid', country: 'Spain'},
    {season: '2002-2003', team: 'Milan', country: 'Italy'},
    {season: '2003-2004', team: 'Porto', country: 'Portugal'},
    {season: '2004-2005', team: 'Liverpool', country: 'England'},
    {season: '2005-2006', team: 'Barcelona', country: 'Spain'},
    {season: '2006-2007', team: 'Milan', country: 'Italy'},
    {season: '2007-2008', team: 'Manchester United', country: 'England'},
    {season: '2008-2009', team: 'Barcelona', country: 'Spain'},
    {season: '2009-2010', team: 'Internazionale', country: 'Italy'},
    {season: '2010-2011', team: 'Barcelona', country: 'Spain'},
    {season: '2011-2012', team: 'Chelsea', country: 'England'},
    {season: '2012-2013', team: 'Bayern Munich', country: 'Germany'},
    {season: '2013-2014', team: 'Real Madrid', country: 'Spain'},
    {season: '2014-2015', team: 'Barcelona', country: 'Spain'},
    {season: '2015-2016', team: 'Real Madrid', country: 'Spain'},
    {season: '2016-2017', team: 'Real Madrid', country: 'Spain'},
  ];
  var country = 'Spain'  // should return 8
  var country = 'Portugal'  // should return 1
  var country = 'Russia'  // should return 0

  var countryArray = [];
  var counts = {};
  for(var i = 0; i < winnerList.length; i++)
  {
      countryArray.push(winnerList[i].country);
  }

// find unique country, and save into array uniqueCountryList
//   var uniqueCoutryList = countryArray.filter(function(value,index,array){
//       return array.indexOf(value) == index;
//   });

//count total occurence of coutries console.log(counts);
countryArray.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

if(counts[country])
{
    var domString = '<h1>' + country + ':' + counts[country] + '</h1>';
}
else
{
    var domString = '<h1>' + country + ':' + 0 + '</h1>';
}

document.getElementById('challenge-2').innerHTML = domString;

/*------------------- Challenge 3 -------------------*/
var test1 = {a: 5, b:2, operator: "add"};  //7
var test1 = {a: 5, b:2, operator: "subtract"}; //3
var test1 = {a: 5, b:2, operator: "multiply"}; //10
var test1 = {a: 5, b:2, operator: "divide"}; //2.5

var result = 0;
switch(test1.operator)
{
    case 'add':
        result = test1.a + test1.b;
        break;
    case 'substract':
        result = test1.a - test1.b;
        break;
    case 'multiply':
        result = test1.a * test1.b;
        break;
    case 'divide':
        result = test1.a / test1.b;
        break;
}

var domString = '<h1>' + result + '</h>';
document.getElementById('challenge-3').innerHTML = domString;



