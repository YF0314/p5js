// window.onload = function(){
//   setInterval("stroke(changecolor())",2000);
// }
function setup() {
    createCanvas(windowWidth, document.body.scrollHeight);
    background(255);
    push();
    translate(width * 0.2, height * 0.5);
    rotate(frameCount / 100);
    polygon(10, 7, 6);
    pop();
  }
function windowResized() {
  resizeCanvas(windowWidth, document.body.scrollHeight);
}
function draw() {
  fill(changecolor());
  stroke(changecolor());
  push();
  translate(random(15,width), random(15,height));
  rotate(frameCount / 100);
  polygon(8, 12, 6);
  pop();
  }
/* End P5JS
   Start Normal Javascript */
function polygon(minx, miny, radius) {
  beginShape();
  for (let i = 0; i < radius; i++) {
    var sx = minx * random(1,6) * radius;
    var sy = miny * random(1,6) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
   function changecolor() {
    let color = [1, 27, 36, 42, 53, 61, 79, 81, 96, 10, 100, 114, 120, 135, 154, 162, 178, 181, 195,203];
    let rgb = Array();
    for (let i = 0; i < 3; i++) {
        rgb.push(color[Math.floor(Math.random() * color.length)]);
    }
    return rgb;
}