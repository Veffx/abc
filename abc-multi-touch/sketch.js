let lastShape = [];   // Real-time shape points
let finalShape = [];  // Last confirmed shape
let prevTouches = 0;  // Number of touches in the previous frame

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30);

  // Draw the last confirmed shape
  if (finalShape.length > 1) {
    stroke(0, 200, 255);
    strokeWeight(3);
    fill(0, 150, 200, 100); // Semi-transparent fill
    beginShape();
    for (let pt of finalShape) {
      vertex(pt.x, pt.y);
      ellipse(pt.x, pt.y, 30); // Show points
    }
    endShape(CLOSE);
  }

  // Draw the current real-time shape from touches
  if (touches.length > 0) {
    stroke(255, 200, 0);
    strokeWeight(3);
    noFill();
    beginShape();
    for (let t of touches) {
      vertex(t.x, t.y);
      ellipse(t.x, t.y, 30);
    }
    endShape(CLOSE);
  }

  // Display instruction text
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text("Touch with multiple fingers to draw a shape", width / 2, height - 40);

  // Logic: check changes in the number of touches
  if (touches.length >= prevTouches) {
    // Touches are stable or increasing → update lastShape
    lastShape = [];
    for (let t of touches) {
      lastShape.push({ x: t.x, y: t.y });
    }
    prevTouches = touches.length;
  } else if (touches.length < prevTouches) {
    // Touch count decreased → save the last shape
    finalShape = [...lastShape];
    prevTouches = touches.length;
  }
}

function touchStarted() {
  return false; // Prevent default behavior (e.g. scrolling)
}

function touchEnded() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
