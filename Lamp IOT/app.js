var five = require("johnny-five");
var firebase = require("firebase");

var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led
  });

  //led.blink(1000); //Led piscando




  // Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "",//key database
  authDomain: "",//domain database
  databaseURL: "",//url dataase
  storageBucket: "",//storageBucket
};

firebase.initializeApp(config);

var starCountRef = firebase.database().ref('lamp');

starCountRef.on('value', function(snapshot){
	let lamp = snapshot.val();
	
	if(lamp)
	{
		console.log("Ligar lamp:"+ lamp );
		led.on();
	}else{
		console.log("Desligar lamp:"+ lamp );
		led.off();
	}

});



});


