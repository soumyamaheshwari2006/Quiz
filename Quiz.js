class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //hiding all the question elements 
    title.hide();
    input1.hide();
    input2.hide();
    button.hide();
    question.hide();
    option1.hide();
    option2.hide();
    option3.hide();
    option4.hide();
    
    //write code to change the background color here
    background("blue")
    
    //write code to show a heading for showing the result of Quiz
    textSize(25);
    text(" Quiz Results", 215, 100);
    
    //call getContestantInfo( ) here
    getContestantInfo() 
    //write condition to check if contestantInfor is not undefined
if (allContestants !== undefined) {
     //write code to add a note here
    fill("Blue");
    textSize(20);
    text("NOTE : Contestant who answered correct are highlighted in yellow Color", 130, 230);
     }    

  //write code to highlight contest who answered correctly
for (var plr in allContestants) {
      var correctAns = "2";

      if (correctAns === allContestants[plr].answer) {
          fill("Green")
      } else {fill("Red")}
}    
  }
}
