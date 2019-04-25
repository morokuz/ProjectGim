let squircle;
let xPrec;
let yPrec;
let xRot;
let yRot;
let delta;

function preload(){
	squircle=loadModel("../assets/monkey.obj", true);
}

function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
	xRot = 0;
	yRot = 0;
	xPrec = 0;
	yPrec = 0;
}


function draw(){
	background(200);
	scale(2);
	//rotateX(PI / 4);
	//rotateY(frameCount*0.01);
	
	if (mouseIsPressed) {
		if ((mouseX - xPrec) > 0) {
			delta = map((mouseX - xPrec), 0, width / 2, 0, 2 * PI)
			yRot += delta;
		} else if ((mouseX - xPrec) < 0) {
			delta = map((mouseX - xPrec), -width / 2, 0, 2 * PI, 0)
			yRot -= delta;
		}
		if ((mouseY - yPrec) > 0) {
			delta = map((mouseY - yPrec), 0, height / 2, 0, 2 * PI)
			xRot -= delta;
		} else if ((mouseY - yPrec) < 0) {
			delta = map((mouseY - yPrec), -height / 2,0, 2 * PI, 0)
			xRot += delta;
		}
	}
	xPrec = mouseX;
	yPrec = mouseY;
	rotateX(xRot);
	rotateY(yRot);
	
	model(squircle);
	//sphere(400);
}