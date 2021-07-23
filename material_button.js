$(() => {

	let intervalo, posX, posY;

	let canvas = document.getElementById("myCanvas");
	let context = canvas.getContext("2d");
	let radius = 0;
	let clicks = 0;

	$("#myCanvas").click((_e) => {

		if (clicks < 1) {
			clicks++
			_e.stopPropagation();
			const pos = {
				left: _e.offsetX,
				top: _e.offsetY
			};
			posX = pos.left;
			posY = pos.top;

			intervalo = setInterval(() => {

				context.clearRect(0, 0, canvas.width, canvas.height);

				radius++;

				context.beginPath();
				context.arc(posX, posY, radius, 0, 2 * Math.PI, false);
				context.fillStyle = "rgba(255,255,255,0.2)";
				context.fill();
				if (radius == 120) {
					clearInterval(intervalo);
					context.clearRect(0, 0, canvas.width, canvas.height);
					radius = 0;
					clicks = 0;
				}

			}, 1 / 500);

			intervalo;
		}

	});

	$("#myCanvas").mouseout(function () {

		clearInterval(intervalo);
		context.clearRect(0, 0, canvas.width, canvas.height);
		radius = 0;
		clicks = 0;

	});

});