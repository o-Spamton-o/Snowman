var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 500;
let gVal = 0;
let rVal = 0;
let cloud1X = 540;
let cloud2X = 625;
let mouth1Y = 260;
let mouth2Y = 258;
let mouth3Y = 252;
let mouth4Y = 258;
let mouth5Y = 252;
let noseY1 = 220;
let noseY2 = 210;
let noseY3 = 230;
let noseX1 = 400;
let noseX2 = 350;
//sun has to reach 30
let sunY = 500;

document.getElementById("myCanvas").addEventListener("click", draw);

function draw() {
  ctx.fillStyle = `rgb(${rVal},${gVal},255)`;
  ctx.fillRect(0, 0, 700, 500);

  gVal += 0.5;
  if (gVal <= 150) {
    gVal = 150;
  }
  rVal += 0.5;
  if (rVal <= 100) {
    rVal = 99;
  }

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(675, sunY, 55, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(675, sunY, 50, 0, 2 * Math.PI);
  ctx.fill();

  sunY -= 1.75;
  if (sunY <= 30) {
    sunY = 30;
  }

  ctx.fillStyle = "rgb(200, 200, 200";
  ctx.beginPath();
  ctx.arc(125, 500, 350, 0, 2 * Math.PI);
  ctx.fill();
  ctx.lineWidth = 30;
  ctx.strokeStyle = "rgb(120, 120, 120";
  ctx.beginPath();
  ctx.moveTo(90, 150);
  ctx.lineTo(350, 500);
  ctx.stroke();
  ctx.fillStyle = "lightgray";
  ctx.beginPath();
  ctx.arc(450, 650, 400, 0, 2 * Math.PI);
  ctx.fill();
  ctx.lineWidth = 90;
  ctx.strokeStyle = "rgb(120, 120, 120";
  ctx.beginPath();
  ctx.moveTo(420, 290);
  ctx.lineTo(600, 550);
  ctx.stroke();

  let cloud = document.getElementById("cloud-img");
  ctx.drawImage(cloud, cloud1X, 0, 120, 100);
  ctx.drawImage(cloud, cloud2X, 40, 90, 70);
  ctx.drawImage(cloud, 350, 220, 90, 70);
  cloud1X--;
  if (cloud1X <= -150) {
    cloud1X = 700;
  }
  cloud2X -= 0.5;
  if (cloud2X <= -150) {
    cloud2X = 700;
  }

  ctx.fillStyle = "rgb(234, 234, 234";
  ctx.beginPath();
  ctx.arc(350, 400, 150, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "rgb(244, 244, 244";
  ctx.beginPath();
  ctx.arc(350, 325, 125, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "rgb(255, 255, 255";
  ctx.beginPath();
  ctx.arc(350, 200, 100, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(350, 400, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(350, 350, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Eyes

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(310, 180, 13, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(400, 180, 13, 0, 2 * Math.PI);
  ctx.fill();

  // Mouth

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(355, mouth1Y, 4, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(340, mouth2Y, 4, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(325, mouth3Y, 4, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(370, mouth4Y, 4, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(385, mouth5Y, 4, 0, 2 * Math.PI);
  ctx.fill();

  mouth3Y += 0.1;
  if (mouth3Y >= 270) {
    mouth3Y = 270;
  }

  mouth5Y += 0.1;
  if (mouth5Y >= 270) {
    mouth5Y = 270;
  }

  mouth2Y += 0.1;
  if (mouth2Y >= 263) {
    mouth2Y = 263;
  }

  mouth4Y += 0.1;
  if (mouth4Y >= 263) {
    mouth4Y = 263;
  }

  ctx.fillStyle = "purple";
  ctx.beginPath();
  ctx.moveTo(350, 300);
  ctx.lineTo(320, 320);
  ctx.lineTo(320, 280);
  ctx.moveTo(350, 300);
  ctx.fill();

  ctx.fillStyle = "purple";
  ctx.beginPath();
  ctx.moveTo(350, 300);
  ctx.lineTo(380, 280);
  ctx.lineTo(380, 320);
  ctx.moveTo(350, 300);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(350, 300, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.moveTo(noseX1, noseY1);
  ctx.lineTo(noseX2, noseY2);
  ctx.lineTo(350, noseY3);
  ctx.moveTo(noseX1, noseY1);
  ctx.fill();
  noseY1 += 3;
  noseY2 += 3;
  noseY3 += 3;
  noseX1 -= 0.5;
  noseX2 -= 0.25;
  if (noseX1 <= 380) {
    noseX1 = 380;
  }
  if (noseX2 <= 351) {
    noseX2 = 351;
  }

  ctx.fillStyle = "black";
  ctx.fillRect(270, 100, 155, 20);

  ctx.fillStyle = "violet";
  ctx.fillRect(286, 95, 125, 10);

  ctx.fillStyle = "black";
  ctx.fillRect(286, 15, 125, 80);

  ctx.lineWidth = 10;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(240, 280);
  ctx.lineTo(120, 220);
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(180, 250);
  ctx.lineTo(160, 200);
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(440, 280);
  ctx.lineTo(560, 200);
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(500, 240);
  ctx.lineTo(570, 260);
  ctx.stroke();

  let cabin = document.getElementById("cabin-img");
  ctx.drawImage(cabin, 10, 45, 175, 150);

  ctx.fillStyle = "maroon";
  ctx.font = "20px Times New Roman";
  ctx.fillText("Have a Wonderful Winter Break!", 10, 20);

  requestAnimationFrame(draw);
}
