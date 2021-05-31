class Game {
  constructor(){

  }

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
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    p1 = createSprite(100,200);
    p1.addImage("p1",swordimg);
    p2 = createSprite(300,200);
    p2.addImage("car2",sword2);
    p3 = createSprite(500,200);
    p3.addImage("car3",sword3);
    p4 = createSprite(700,200);
    p4.addImage("car4",sword4);
    p = [p1, p2, p3, p4];
    passedFinish=false
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getFinishPlayers();
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        p[index-1].x = x;
        [index-1].y = y;
       // console.log(index, player.index)

        
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          p[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }
      
    

    if(player.score > 100){
      gameState = 2;
      
    
      
      Player.updateFinishPlayers(player.rank)
      player.rank+=1
    }    
    

    
      
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank)
  }
}
