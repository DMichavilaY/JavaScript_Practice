function confirmacion() {
	var pregunta = confirm("¿Deseas visitar esta página?")
	if (pregunta){
		alert("Vale, acepta para continuar")
		window.location = "https://ibim.es/";
	}
	else{
		alert("No hay problema, en otro momento será!😢")
	}
}
