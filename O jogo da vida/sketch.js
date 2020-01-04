var grade = [];
var largura = 10;

function setup() {
	createCanvas(1180,600);
	//frameRate(10);
	criaGrade();

}

function draw() {

	mostrarTudo();
	atualizaGrade();
}


function criaGrade(){ //cria a grade com as celulas e cria a array com seus vizinhos
	for(var i = 0; i<width; i+= largura){ //coluna
			var temp = [];
			for(var j = 0; j<height; j+= largura){// linha
				var celula = new Celula(i,j, largura, false);
				append(temp, celula); //cria uma array e após isso adiona na grade
			}
			append(grade, temp); 
	}

	sorteiaV();
	criaVizinhos();
}

function mostrarTudo(){
	background(0);

	for(var i = 0; i<grade.length; i++){
		for(var j = 0; j<grade[i].length; j++){
			grade[i][j].mostrar();
		}
	}
}

function sorteiaV(array){ //sorteia algumas celulas para serem vivas
	var numdevivas = 700;

	for(var i = 0; i<numdevivas; i++){
		var x = floor(random(0, grade.length));
		var y = floor(random(0, grade[x].length));
		grade[x][y].vivo = true;

	}
}

function criaVizinhos(){ 
	for(var i = 0; i<grade.length; i++){ //mostrar grade
		for(var j = 0; j<grade[i].length; j++){
		
			if(grade[i-1]){ //esquerda
				if(grade[i-1][j]){
					append(grade[i][j].vizinhos, grade[i-1][j]);
				}
				if(grade[i-1][j-1]){ //sperior esquerda
					append(grade[i][j].vizinhos, grade[i-1][j-1]);
				}

				if(grade[i-1][j+1]){ //inferior esquerda
					append(grade[i][j].vizinhos, grade[i-1][j+1]);
				}
			}

			if(grade[i+1]){ //direita
				if(grade[i+1][j]){
					append(grade[i][j].vizinhos, grade[i+1][j]);
				}
				
				if(grade[i+1][j-1]){// superior direita
					append(grade[i][j].vizinhos, grade[i+1][j-1]);
				}
				
				if(grade[i+1][j+1]){//inferior direito
					append(grade[i][j].vizinhos, grade[i+1][j+1]);
				}
			}

			if(grade[i][j-1]){ //cima
				append(grade[i][j].vizinhos, grade[i][j-1])
				}
			if(grade[i][j+1]){ //baixo
				append(grade[i][j].vizinhos, grade[i][j+1]);
			}
		}
	}
}

function atualizaGrade(){
	for(var i = 0; i<grade.length; i++){
		for(var j = 0; j<grade[i].length; j++){
			grade[i][j].atualizaCelula();
		}
	}
}

