var celdasVacias = [];
var vaciasLongitud = document.getElementsByClassName("vacio").length;

var celdasBomba = [];
var	bombaLongitud = document.getElementsByClassName("bomba").length;

var celdasNumero1 = [];
var numeroLongitud1 = document.getElementsByClassName("numero1").length;

var celdasNumero2 = [];
var numeroLongitud2 = document.getElementsByClassName("numero2").length;
 
var contenedorTabla = document.getElementById("contenedorTablaBuscaminas");

/Ciclos celdas vacias a color/
for (var i = 0 ; i < vaciasLongitud; i++) {
	celdasVacias[i] = document.getElementsByClassName("vacio")[i];
}
for (var i = 0 ; i < vaciasLongitud; i++) {
   celdasVacias[i].addEventListener('click', cambiarAColor, false); 
}

/Ciclos celdas vacias a bomba/
for (var i = 0 ; i < bombaLongitud; i++) {
	celdasBomba[i] = document.getElementsByClassName("bomba")[i];
}
for (var i = 0 ; i < bombaLongitud; i++) {
   celdasBomba[i].addEventListener('click', explotarBombas, false);


}

/Ciclos celdas vacias a numero1/
for (var i = 0 ; i < numeroLongitud1; i++) {
	celdasNumero1[i] = document.getElementsByClassName("numero1")[i];
}
for (var i = 0 ; i < numeroLongitud1; i++) {
   celdasNumero1[i].addEventListener('click', revelarNumero_1, false); 
}

/Ciclos celdas vacias a numero2/
for (var i = 0 ; i < numeroLongitud2; i++) {
	celdasNumero2[i] = document.getElementsByClassName("numero2")[i];
}
for (var i = 0 ; i < numeroLongitud2; i++) {
   celdasNumero2[i].addEventListener('click', revelarNumero_2, false); 
}



function cambiarAColor() {
	this.style.backgroundColor = "red";
}

function explotarBombas() {
	alert("Perdiste  :( ");

	var seccion = document.getElementById("contenedorTablaBuscaminas");
	var tabla = document.getElementById("tablaBuscaminas");

	seccion.removeChild(tabla);

	/*for (var i = 0; i < bombaLongitud; i++) {
		celdasBomba[i].innerHTML = "☠";
	}	*/
}

function revelarNumero_1 () {
	this.innerText = "1";
}

function revelarNumero_2 () {
	this.innerText = "2";
}
