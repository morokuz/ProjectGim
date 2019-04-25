let x;
let y;

function setup() {
	createCanvas(windowWidth, windowHeight);
  textSize(100);
  textAlign(CENTER);
  x=0;
 y=height;
 a=0;
 b=height;
 noFill();
}

function draw() {
	background(255);
	ellipse(mouseX,mouseY, x, y);
	x+=5;
	y-=5;

	
	ellipse(mouseX,mouseY, b, a);
	a+=5;
	b-=5;

	if(x>width*2){
		x=0;
 		y=height;

 		a=0;
 		b=height;
	}


}