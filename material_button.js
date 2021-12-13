'use strict';

// MaterialButton elements
const canvasElements = document.querySelectorAll(".ripple");
let intervalo;

// MaterialButton click and mouseout events
canvasElements.forEach((item) => {

	// MaterialButton click event
	item.addEventListener("click", (_e) => {

		const context = item.getContext("2d");
		if (intervalo) {
			clearInterval(intervalo);
			context.clearRect(0, 0, item.width, item.height);
			intervalo = null;
		}

		_e.stopPropagation();
		// Get the mouse position
		const pos = {
			left: _e.offsetX,
			top: _e.offsetY
		};

		let posX = pos.left;
		let posY = pos.top;

		let radius = 0;
		// Create a new circle ripple
		intervalo = setInterval(() => {
			// Clear the canvas
			context.clearRect(0, 0, item.width, item.height);

			radius++;
			// Draw the circle
			context.beginPath();
			context.arc(posX, posY, radius, 0, 2 * Math.PI, false);
			context.fillStyle = 'rgba(255,255,255,0.2)';
			context.fill();
			if (radius == 120) {
				clearInterval(intervalo);
				context.clearRect(0, 0, item.width, item.height);
				radius = 0;
			}

		}, 1 / 500);

		intervalo;

	});

	// MaterialButton mouseout event
	item.addEventListener("mouseout", () => {

		// Clear the canvas
		clearInterval(intervalo);
		const context = item.getContext("2d");
		context.clearRect(0, 0, item.width, item.height);

	});

});