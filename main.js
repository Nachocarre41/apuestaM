




function enviarNumero(elemento,numero)
{

	
	
	 elemento = document.getElementById("enviarApuesta").value;
	
	let numeroN = Math.random()*30;
	 numero = Math.floor(numeroN);

	 if (elemento == numero) {
	
		document.write(`<br> EL NUMERO APOSTADO ES ${elemento}<br> GANASTE, EL RESULTADO ES:</p> `, numero);
	
	}

	else if (elemento == "") {
		document.write("<p class='texto1'><br> NO HICISTE APUESTA, EL RESULTADO ES: </p>", numero);
	}
	
	else{
		;
		document.write(`<br> EL NUMERO APOSTADO ES ${elemento}<br> PERDISTE, EL RESULTADO ES:</p> `, numero);
	
	}
}









