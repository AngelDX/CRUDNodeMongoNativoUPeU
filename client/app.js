$(function(){
	var l=new Crud();
})

class Crud{
	constructor(){
		this.submitEvent()
	}

	submitEvent(){
		$('form').submit((event)=>{
			event.preventDefault()
			this.sendForm()
		})
	}

	sendForm(){
		alert("Capturado el Submit")
		let form_data=new FormData();
		form_data.append('nombre',$('#nombre').val())
		form_data.append('edad',$('#edad').val())
		$.ajax({
			url: '../server/insertRegistro',
			dataType:'json',
			processData: false,
			contentType: false,
			data: form_data,
			type: 'POST',
			success: function(respuesta){

			},
			error:function(){
				alert('Error en la comuncacion con el servidor');
			}
		})
	}
}

