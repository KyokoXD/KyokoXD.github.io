let atropelaVaca = false;
let atropelaEmoji = false;

function atropelamento(){
  
  //Teste carro a carro
  for(let i=0; i<imgCarro.length; i++){
    
    atropelaVaca = collideRectRect(xVaca, yVaca, 28, 28, xCarro[i], yCarro[i], 50,30);
    
    if(atropelaVaca){
      //Vaca atropelada
      yVaca = 367;
     if(placarVaca > 0)//Evita placar negativo
       placarVaca -= -1;
    }
    
    atropelaEmoji = collideRectRect(xEmoji, yEmoji, 28, 28, xCarro[i], yCarro[i], 50,30);
    
    if(atropelaEmoji){
      //Emoji atropelado
      yEmoji = 367; 
     if(placarEmoji > 0)//Evita placar negativo
      placarEmoji -= 1;
    }
    
  }//For
}//atropelamento