class Game {
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

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(12);
    text("Game Start", 140, 40);
    Player.getPlayerInfo();

    if(allPlayers!==undefined){
      var displayPosition= 130;
      for(var elr in allPlayers){
        displayPosition+=20;
        textSize(12);
        text(allPlayers[elr].name+ ":" + allPlayers[elr].distance, 120, displayPosition);
      }
    }

    if(keyIsDown(RIGHT_ARROW)&& player.index!==null){
      player.distance+=50;
      player.update();
    }
  }


}
