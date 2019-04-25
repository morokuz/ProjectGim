function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    fill(random(255), random(255), random(255));
    let radious = random(20, 100);
    ellipse(random(width), random(height), radious, radious);
}