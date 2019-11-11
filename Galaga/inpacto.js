let atropelaPlayer = false;

function inpactoPlayer(){
  
  //Teste das pedras
  for(let i=0; i<imgPedras.length; i++){
    
    atropelaPlayer = collideRectRect(xPlayer, yPlayer, 28, 28, xPedras[i], yPedras[i], 50,30);
    
    if(atropelaPlayer){
      //Nave atropelada
      yPlayer = 367;
      if(lifePlayer > 0)//Evita placar negativo
        lifePlayer -= 1;
    }
  }//For
}//atropelamento

function inpactoBoss(){
    
    atropelaBoss = collideRectRect(xPlayer, yPlayer, 28, 28, xBoss, yBoss, 0,0);
  
    if(atropelaBoss){
      //Nave atropelada
      yBoss = 100;
      if(lifeBoss > 0)//Evita placar negativo
        lifeBoss -= 1;
    
  }//For
}//atropelamento
