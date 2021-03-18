function realizarCalculo(){



	if(document.f1.operacion.value === "sumar"){
        var num1 = parseInt(document.f1.num1.value);
        var num2 =  parseInt(document.f1.num2.value);
        var res = num1 + num2;
        var mensaje="El resultado es " + res;
        document.getElementById('resultado').innerHTML=mensaje;

	}else if(document.f1.operacion.value === "dividir"){
		/** @TODO: Realizar división. Nota: No se puede dividir por 0. Mostrar información al Usuario */
	}
	/** @TODO: Realizar resta */
	/** @TODO: Realizar multiplicación */
	
}


