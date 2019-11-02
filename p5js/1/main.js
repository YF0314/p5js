function setup() {
    createCanvas(460, 720);
    background('rgba(0,255,0, 0.25)');
  }
  
function draw() {
    // if (mouseIsPressed) {
    //   fill(changecolor());
    //   ellipse(mouseX, mouseY, 80, 80);
    // }
    if (mouseIsPressed) {
            push();
            stroke(changecolor()); // 線の色指定
            strokeWeight(8); // 線の太さ指定
            line(currentX, currentY, mouseX, mouseY); // 線の描画
            pop();
    }
    currentX = mouseX;
    currentY = mouseY;
    //stroke(255);
  }
/* End P5JS
   Start Normal Javascript */
function changecolor() {
    let color = [1, 27, 36, 42, 53, 61, 79, 81, 96, 10, 100,120,135,154];
    let rgb = Array();
    for (let i = 0; i < 3; i++) {
        rgb.push(color[Math.floor(Math.random() * color.length)]);
    }
    return rgb;
}