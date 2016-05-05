
var TeslaModelS = function(){

	// declare private variables and functions here
	this.numWheel = 4;
	this.manufacturer = 'Tesla';
	this.name = 'Model S';

}

/*-----------method 1----------------*/
// TeslaModelS.prototype.go = function() {
// 	console.log('TeslaModelS goes');
// };

// TeslaModelS.prototype.stop = function() {
// 	console.log('TeslaModelS stops');
// };

/*-----------method 2----------------*/
// TeslaModelS.prototype = function(){

// 	var go = function(){
// 		console.log('TeslaModelS goes');
// 	}

/*-----------method 3----------------*/
// 	var stop = function(){
// 		console.log('TeslaModelS stops');
// 	}

// 	return {
// 		go:go,
// 		stop:stop
// 	}
// }();

TeslaModelS.prototype = {

	go:function(){console.log('TeslaModelS goes');},

	stop:function(){console.log('TeslaModelS stops');}

}


window.onload=function(){

	document.getElementById('btn1').onclick = function(){
		TeslaModelS.prototype.go();
	}

	document.getElementById('btn2').onclick = function(){
		TeslaModelS.stop(); //undefined
	}

	document.getElementById('btn3').onclick = function(){

		model = new TeslaModelS();
		console.log(model.name); 
		console.log(TeslaModelS.name); //null
	}
}

