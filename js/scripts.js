$(function(){
	$('.galeria .contenedor-imagen').on('click', function(){
		$('#modal').modal;
		var ruta_imagen = ($(this).find('img').attr('src'));
		$('#imagen-modal').attr('src', ruta_imagen);
	});

	$('#modal').on('click', function(){
		$('#modal').modal('hide');
	});
})

var form = document.getElementsByClassName('formulario')
form[0].addEventListener('submit', function(evt){
	var nombre = form[0].nombre;
	var email = form[0].email;
	var mensaje = form[0].mensaje;
	if (nombre.value=='' || nombre.value == 'Ingrese Nombre'){
		evt.preventDefault();
		nombre.value='Ingrese Nombre';
		nombre.style.color= 'red';
		nombre.style.border='solid 1px red'
		nombre.focus();		
	}else if(email.value == '' || nombre.value == 'Ingrese Email'){
		evt.preventDefault();
		email.value='Ingrese Email';
		email.style.color= 'red';
		email.style.border='solid 1px red'
		email.focus();	
	}else if(mensaje.value == '' || nombre.value == 'Escriba su Mensaje'){
		evt.preventDefault();
		mensaje.value='Escriba su Mensaje';
		mensaje.style.color= 'red';
		mensaje.style.border='solid 1px red'
		mensaje.focus();	
	}
});



var mensaje = document.getElementById('mensaje');
var caracteresMaximos = 140 ;
mensaje.addEventListener('keypress', function(evt){
	var caracter = evt.charCode || evt.keyCode ;
	//permitir flechas horizntales
	if (caracter == 37 || caracter == 39){
		return true;
	}
	//permitir borrar con backspace y supr
	if (caracter == 8 || caracter == 46){
		return true;
	}else if (this.value.length >= caracteresMaximos){
		evt.preventDefault ();
	}
});
mensaje.addEventListener ('keyup' , function(){
var info = document.getElementsByClassName('infocaract');
if (this.value.length >= caracteresMaximos){
	info[0].innerHTML = "Maximo" + caracteresMaximos + " caracteres";
}else {
	info[0].innerHTML = "Puede escribir Hasta " + (caracteresMaximos - this.value.length) + " caracteres";
}

});
mensaje.addEventListener('keydown', function(evt){
	// Obtenemos la teclas pulsada
	var caracter = evt.charCode || evt.keyCode;
	
	if(caracter == 86 && evt.ctrlKey){
		evt.preventDefault();
	}
});