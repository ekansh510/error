class Player {
  constructor(){
    this.index = null;
    this.score=0;
    this.name = null;
    this.rank = null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      score:this.score,
      rank:this.rank
    });
  }
getFinishPlayers(){
   var finishPlayersRef=database.ref('finishPlayers')
   finishPlayersRef.on("value",(data)=>{
     finishPlayers=data.val()
       })
  }


 static  updateFinishPlayers(rank){
    database.ref('/').update({
      
      finishPlayers:rank
    })
      

  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
