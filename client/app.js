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
	}
}

