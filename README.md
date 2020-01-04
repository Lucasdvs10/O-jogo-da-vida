# O-jogo-da-vida

O jogo da vida foi criado pelo matemático John Horton Conway. Ele é um exercício e exemplo de celulas autonômas e de como um conjunto de regras simples pode criar uma situação relativamente complexa.

O jogo consiste em uma grade cuja cada celula possui o estado de morta ou viva.

As regras são bem simples:
 
 1- Qualquer celula viva com menos de dois vizinhos vivos morre de solidão.
  
  2- Qualquer celula viva com mais de três vizinhos vivos morre de superpopulação.
  
  3- Qualquer celula morta com exatamente três vizinhos vivos se torna uma celula viva.
  
  4- Qualquer celula viva com exatamente dois ou três vizinhos vivos permanece no estado que está na próxima geração.
  
Observa-se que certas configurações de celulas tornam o grupo estável, ou seja ninguém morre e nem vive. E há também configurações em que se cria grupos que estão em movimento infinitamente sem sair do lugar.
