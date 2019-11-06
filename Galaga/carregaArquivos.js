let imgEspaciu;

let imgPlayer;

let imgBoss;

let imgPedras = [];

let imgCoracao1;

let imgCaveira;


function preload(){
  imgEspaciu = loadImage('imagens/espaciu.jpg');
  imgPlayer = loadImage('imagens/player.png');
  imgBot = loadImage('imagens/bot.png');
  imgBoss = loadImage('imagens/boss.png');
  imgCoracao1 = loadImage('imagens/coracao1.png')
  imgfimdejogo = loadImage('imagens/fimdejogo.png')
  imgInicial = loadImage('imagens/inicial.jpg')
  imgCaveira = loadImage('imagens/caveira.png')
  
  imgPedras[0] = loadImage('imagens/pedras.png');
  imgPedras[1] = loadImage('imagens/pedras1.png');
  imgPedras[2] = loadImage('imagens/pedras2.png');
  
  imgPedras[3] = loadImage('imagens/pedras3.png');
  imgPedras[4] = loadImage('imagens/pedras4.png');
  imgPedras[5] = loadImage('imagens/pedras5.png');
  
  trilha = loadSound('sons/trilha.mp3');

}

//Variáveis de movimento player

let yPlayer = 368;
let xPlayer = 250;

//Variáveis de movimento Boss


let yBoss = 1;
let xBoss = 200;

//Variáveis do coraÇão


let yCoracao1 = 5;
let xCoracao1 = 2;

//Variáveis da Caveira 

let yCaveira = 1;
let xCaveira = 560;




//Vetores
//             Direita      /   Esquerda
let xPedras = [615, 605, 610, -60, -65, -70];
let yPedras = [45, 105, 158, 215, 270, 325];
let velocidadePedras = [2, 3, 5, 2, 3, 5];





