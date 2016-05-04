
var TeslaModelS = (function(){

	// declare private variables and functions here
	var numWheel = 4;
	var manufacturer = 'Tesla';
	var name = 'Model S';

	function go(){

		console.log('Model S goes');

	}

	function stop(){

		console.log('Model S stops');

	}

	return{

		// declare public variables and function here
		text:'text',
 		
 		//reveal module pattern, 1 kind of module design pattern
		pressGasPedal_1:go,  

		//module design pattern
		pressGasPedal:function(){
			console.log('now pressGasPedal');
			go();
		},


		//reveal module pattern, 1 kind of module design pattern
		pressBrakePedal_1:stop,

		//module design pattern
		pressBrakePedal:function(){
			console.log('now pressBrakePedal');
			stop();

		}
	}
})();  

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

