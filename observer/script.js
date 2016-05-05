
var Subject = function(){

	var observers = [];

	return{

		subsribeObserver:function(observer){

			observers.push(observer);

		},

		unsubscribeObserver:function(observer){

			var index = observers.indexOf(observer);
			if (index>-1) {
				observers.splice(index, 1);
			}

		},

		notifyObserver:function(observer){

			var index = observers.indexOf(observer);
			if (index>-1) {
				observers[index].notify(index);
			};

		},

		notifyAllObserver:function(){

			for (var i = 0; i < observers.length; i++) {
				observers[i].notify(i);
			}

		}

	}

}

var Observer = function(){

	return {

		notify:function(index){
			console.log('observer'+index+' is notified!');
		}

	}

}

window.onload = function(){

	observer1 = new Observer();
	observer2 = new Observer();
	observer3 = new Observer();		
	observer4 = new Observer();

	subject = new Subject();

	document.getElementById('btn1').onclick = function(){

	subject.subsribeObserver(observer1);
	subject.subsribeObserver(observer2);
	subject.subsribeObserver(observer3);
	subject.subsribeObserver(observer4);

	}

	document.getElementById('btn2').onclick = function(){

		subject.notifyObserver(observer1);

	}

	document.getElementById('btn3').onclick = function(){

		subject.notifyAllObserver();

	}

}
