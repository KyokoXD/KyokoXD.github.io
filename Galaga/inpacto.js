let atropelaPlayer = false;

function inpactoPlayer(){
  
  //Teste carro a carro
  for(let i=0; i<imgPedras.length; i++){
    
    atropelaPlayer = collideRectRect(xPlayer, yPlayer, 28, 28, xPedras[i], yPedras[i], 50,30);
    
    if(atropelaPlayer){
      //Vaca atropelada
      yPlayer = 367;
      if(lifePlayer > 0)//Evita placar negativo
        lifePlayer -= 1;
    }
  }//For
}//atropelamento