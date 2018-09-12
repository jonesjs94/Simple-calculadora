// $(document).ready(function(){
	// Guardo la operación matemática en la variable
	var valor1 = "";
	var	valor2 = "";
	var operador = "";
	var resultado = "";
	// Cuando deseo que se escriba sobre la variable valor1, x = true. Para desactivarlo asigno x = false.
	var x = true;

	// Obtiene texto de los botones
	$('.num').click(function(e) {
		// Si no hay asignado un operador, agrego valores a la variable valor1
		if (x == true) {
			var txt = $(e.target).text();
			valor1 += txt;
			$('#resultado').text(valor1);	
			// resultado = ""; //El valor del resultado vuelve a estar vacío		
		}
		// Si hay asignado un operador, agrego valores a la variable valor2
		else {
			var txt = $(e.target).text();
			valor2 += txt;
			$('#resultado').text(valor2);			
		}
	});

	// C RESETEAR
	$("#resetear").click(function(){
		$("#resultado").text("0");
		valor1 = "";
		valor2 = "";
		operador = "";
		resultado = "";
	});

	// SUMAR
	$("#sumar").click(function(e){
		operador = "+";
		// Si el resultado tiene un valor numérico, le asigno un valor vacío a la variable valor2
		operacion()
	});	

	// RESTAR
	$("#restar").click(function(e){
		operador = "-";
		operacion()
	});	

	// DIVIDIR
	$("#dividir").click(function(e){
		operador = "%";
		operacion()
	});	

	// MULTIPLICAR
	$("#multiplicar").click(function(e){
		operador = "x";
		operacion()
	});		


	// Realizo la operación matemática
	$("#igual").click(function(e){
		// Si el valor1 tiene valor, se realiza la operación sobre el mismo. Si no tiene valor, se procede a trabajar sobre el resultado y el valor 2
		if (valor1 == ""){
			switch (operador) {
			case "+":
				var cuenta = Number(resultado) + Number(valor2);
			break;
			case "-":
				var cuenta = Number(resultado) - Number(valor2);
			break;
			case "x":
				var cuenta = Number(resultado) * Number(valor2);
			break;
			case "%":
				var cuenta = Number(resultado) / Number(valor2);						
			}
			// El resultado lo convierto en string y limito su longitud
			 resultado = cuenta.toString().substring(0,11);
		}
		else {
			switch (operador) {
			case "+":
				var cuenta = Number(valor1) + Number(valor2);
			break;
			case "-":
				var cuenta = Number(valor1) - Number(valor2);
			break;
			case "x":
				var cuenta = Number(valor1) * Number(valor2);
			break;
			case "%":
				var cuenta = Number(valor1) / Number(valor2);						
			}
			// El resultado lo convierto en string y limito su longitud
			 resultado = cuenta.toString().substring(0,11);
		}

		// Me refiero al panel del resultado y defino el mismo en el HTML.
		$('#resultado').text(resultado);
		// Por motivos de desarrollo
		console.log(resultado);

		// valor1 vuelve a tener un valor vacío
		x = true;
		valor1 = "";
	});

	function operacion(){
		if (x == true) { x = false; valor2 = ""; }
		else  		  { valor2 = ""; x = true; }
	}

// });	
