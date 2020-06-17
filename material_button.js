var posX;
var posY;
var canvas;
var context;
var intervalo;

$(function(){
	$("#contenedor").mousedown(function(e){
		var pos=$(this).offset();
		 posX=(e.pageX-pos.left);
		 posY=(e.pageY-pos.top);

		 canvas = document.getElementById("myCanvas");
		 context = canvas.getContext("2d");
		 var radius = 0;

		 intervalo=setInterval(function touch(){

		 context.clearRect(0, 0, canvas.width, canvas.height);

		var centerX = posX;
		var centerY =posY;

		radius=radius>=120?0:radius+1;

		context.beginPath();
		context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		context.fillStyle = "rgba(0,0,0,0.2)";
		context.fill();
		if(radius==120){
			clearInterval(intervalo);
		}
	},1/500);
		 intervalo;
	});
	$("#contenedor").mouseout(function(){
		clearInterval(intervalo);
		context.clearRect(0, 0, canvas.width, canvas.height);
	});
});