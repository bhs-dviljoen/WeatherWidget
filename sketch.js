function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(81, 154, 158);
  
  // Draw Labels
  textSize(25);
  fill(255);
  text("DIGITAL", 60, 50);
}

function keyPressed() {
  // Activates when key is pressed
  if (keyCode === 32) {
    console.log("spacebar");
  }
  if (keyCode === 37) {
    console.log("left arrow");
  }
  if (keyCode === 39) {
    console.log("right arrow");
  }
}
