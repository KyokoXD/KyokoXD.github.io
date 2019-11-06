function setup() {
  createCanvas(600, 410);
  trilha.setVolume(0.2);
  trilha.loop();
}

function draw() {
  if(frameCount > 400){ // +/- 8s
    if(lifePlayer > 0 && lifeBoss > 0){
      jogar();
      console.log("Player: " +  lifePlayer + " Boss: " + lifeBoss);
    }else
      verificaVencedor();
  }else{    
    telaInicial();
  }
}

function verificaVencedor(){
  if(lifePlayer >= 1)
    playerVencedor(); //Tela Final
    else
     bossVencedor();// Tela Final
 
}

function playerVencedor(){
  background("DarkGreen");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Chartreuse");
  textSize(48);
  text("Player Venceu", 200, 90);
  image(imgPlayer, 20, 100, 150, 150);  
}

function bossVencedor(){
  background("Black");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Red");
  textSize(48);
  text("", 200, 90);
  image(imgBoss,200, 100, 200, 200);
  background(imgfimdejogo);
}



function telaInicial(){
  background(imgInicial);
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Red");
  textSize(48);
  text(" | Space Boss | ", 300, 190);
  textSize(24);
  text("AIPR2019", 300, 230);  
  text("Prof.Tarcício Nunes", 300, 300);
  text("Gustavo Sales,Gabriel e Marlon  ", 300, 390);
  

}



function jogar(){
   background(imgEspaciu);
   mostraPlayer();
   movimentaPlayer();
   mostraBoss();
   mostraPedras();
   movimentaPedras();
   mostraLife();
   inpactoPlayer();
   mostraCoracao1();
   mostraLifeBoss();
   mostraCaveira();
  
 
     
}
