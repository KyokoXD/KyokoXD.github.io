function movimentaPedras(){

  for(let i=0; i < imgPedras.length; i++){
    if(i < 3){
      //Carros indo para esquerda
      xPedras[i] -= velocidadePedras[i];
      
      //Se o carro chegou no fim do percurso
      if(xPedras[i] < -55){
        xPedras[i] = 605;
        velocidadePedras[i] = ceil(random(6,5));    
      }  
      
    }else{    
      //Carros indo para a direita
      xPedras[i] += velocidadePedras[i];
      
      if(xPedras[i] > 605){
        xPedras[i] = -65;
        velocidadePedras[i] = ceil(random(5,5));
      }//If
    }//Else
  }//For
}//Função