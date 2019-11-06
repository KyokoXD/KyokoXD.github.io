let lifePlayer = 3;

let lifeBoss = 10;

function mostraLife(){
  textSize(32);
  
  
  fill("RED");
  text(lifePlayer, 50, 28);
  
  if(yPlayer < 15){
    lifePlayer += 1;
    yPlayer = 368;
    
    if(yPlayer > 15){
      lifeBoss -=1;
      yPlayer = 368
       }
  }
}

function mostraLifeBoss(){
 textSize(32);
 
 
 fill("RED");
 text(lifeBoss, 550, 28);
 
 if(xBoss < 15){
   lifeBoss += 1;
   xBoss = 368;
   
 }
}



