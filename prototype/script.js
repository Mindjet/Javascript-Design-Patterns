
var TeslaModelS = function(){

	// declare private variables and functions here
	this.numWheel = 4;
	this.manufacturer = 'Tesla';
	this.name = 'Model S';

}

window.onload=function(){

	document.getElementById('btn1').onclick = function(){
		TeslaModelS.pressGasPedal();
		TeslaModelS.pressGasPedal_1();
	}

	document.getElementById('btn2').onclick = function(){
		TeslaModelS.pressBrakePedal();
		TeslaModelS.pressBrakePedal_1();
	}

	document.getElementById('btn3').onclick = function(){
		console.log(TeslaModelS.name); //undefined
		console.log(TeslaModelS.text);
	}
}

