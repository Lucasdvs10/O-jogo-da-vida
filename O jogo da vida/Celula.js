	class Celula{
		constructor(i,j, largura, vivo){
			this.i = i;
			this.j = j;
			this.largura = largura;
			this.vizinhos = []; //array com os vizinhos não visitados
			this.numviz = 0;
			this.vivo = vivo;

		}

		mostrar(){
			
			if(this.vivo){
				fill(0);
			}
			else{
				fill(255);
			}
			rect(this.i, this.j, this.largura, this.largura);

		}

		atualizaCelula(){
			this.atualizaVizinhos();

			if(this.vivo && this.numviz < 2){ //qualquer celula com menos de dois vizinhos morre de solidão
				this.vivo = false;
			}
			
			else if(this.vivo && this.numviz > 3){
				this.vivo = false;
			}

			else if(!this.vivo && this.numviz == 3){
				this.vivo = true;
			}
		}

		atualizaVizinhos(){
			var temp = 0;
			for(var i = 0; i<this.vizinhos.length; i++){
				if(this.vizinhos[i].vivo){
					temp++;
				}
			}
			this.numviz = temp;
		}
	}
		