let squircle;

function preload(){
	squircle=loadModel("../assets/untitled.obj");
}

function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
	
}


function draw(){
	background(200);
	rotateX(frameCount*0.01);
	rotateY(frameCount*0.01);
	model(squircle);
}