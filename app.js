function principal(option){
	do{
		var respuesta = prompt("Indique si desea: 1)Cifrar - 2)Descifrar");
		if(respuesta != ""){
			if(respuesta == "1") {
				cifrar();
			} else if (respuesta == "2") {
				descifrar();
			} else {
				alert("Ingrese una opción válida");
			}
		}
	} while (respuesta == "" || (respuesta != "1" && respuesta != "2"));
}

function cifrar(){
	alert("La respuesta es:");
}

function descifrar(){
	alert("La respuesta es:");
}

principal();

/*
function caesar(texto, clave) {
    var output="";
    clave = parseInt(clave);
    for (var i=0; i<texto.length;i++){
		output += String.fromCharCode(texto.charCodeAt(i)+clave);
    }
    return output;    
}
*/
