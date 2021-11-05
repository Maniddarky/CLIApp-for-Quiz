readLineSync=require("readline-sync")
var fs=require("fs");

var score = 0;
var playerName=readLineSync.question("Welcome to Game of Thrones 🔥 quiz! What is your Name? ")

console.log("Hey "+playerName+" Let's begin--")
console.log("-----------------------")

function play(question, answerArr,answer)
{
  //userAns=readLineSync.question(question);
  console.log(question);
  index=readLineSync.keyInSelect(answerArr,'Enter your option : ');
  //console.log(index);
  //console.log(answer)
  if(index==-1)
  {
    console.log("You skipped this question. So you cannot get score for this question!");
    console.log("-----------------------")
    return;
  }
  if(index===answer)
  {
    console.log("correct answer!!");
    score++;
  }
  else
  {
    console.log("Sorry! It's wrong!");
  }
  console.log("Current Score : "+score);
  console.log("-----------------------");
}

function reverse(s){
    return s.split("").reverse().join("");
}

var ansArr = [
  ["Arya","Sansa","Rickon","Bran"],
  ["Cersei Lannister","Lisa Arryn","Lyanna Stark","Olenna Tyrell"],
  ["the Onion Knight","the Hound","the Sand Snake","Hot Pie"],
  ["Jaqen H’ghar","Barristan Selmy","Alliser Thorne","Beric Dondarrion"],
  ["poisons him","cuts his head off","crushes his skull","strangles him"],
  ["Janos Slynt","Mance Rayder","Craster","Tormund Giantsbane"],
  ["Brotherhood Without Banners","Second Sons","Sons of the Harpy","Faceless Men"],
  ["Drogon","Viserion","Rhaegal","Balerion"],
  ["tongue","sword","hand","chariot"],
  ["Unbowed, Unbent, Unbroken","We Do Not Sow","Winter is Coming","Ours is the Fury"]
];

var answer=[2,2,0,3,2,1,3,3,2,1];

var questions=
["Who is the youngest of Ned Stark’s children?",
  "Who is Jon Snow’s mother?",
  "What is Davos Seaworth’s nickname?",
  "Which character, also known as the Lightning Lord, gets continually resurrected by Thoros of Myr after he dies?",
  "How does Gregor (“the Mountain”) Clegane kill Oberyn Martell, the “Red Viper,” in their trial by combat?",
  "Which former ranger of the Night’s Watch led an army of wildlings as the “King-Beyond-the-Wall”?",
  "What’s the name of the band of assassins that Arya Stark joins in Braavos?",
  "Which of the following is not a name of one of Daenerys Targaryen’s dragons?",
  "Jamie Lannister has a golden ___.",
  "What are the “house words” of House Greyjoy?"
];
for(var i=0;i<questions.length;i++)
{
  play(questions[i],ansArr[i],answer[i]);
}
//console.log("Your Score is "+score)

var str=fs.readFile('result.txt',function(err,str)
{
  if(err)
  console.error(err);
  //console.log("read file "+high);
  var high=str.toString();
  var l=high.length;
  var currMax="";
  var i;
  for(i=high.length-1;i>=0;i--)
  {
    //console.log(high[i]);
    if(high[i]===' ')
    break;
    currMax+=high[i];
  }
  var currMaxName=high.substring(0,i);
  currMax=parseInt(reverse(currMax))
  //console.log("current max "+currMax);
  //console.log("score "+score);
if(currMax<=score){
  high=playerName+" "+score;
fs.writeFile('result.txt',high,function(err)
{
  if(err)
  console.error(err);
});
console.log("Congratulation! "+playerName+" You are the top scorer now : "+score);
}
else
{
  console.log("Your score is : "+score);
  console.log("You didn't make it to top😑");
  console.log("Current Topscorer : "+currMaxName+" score : "+currMax);
}
});


