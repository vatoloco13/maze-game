const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
const currentRectX = 425;
const currentRectY = 3;
const mazeWidth = 556;
const mazeHeight =556;
var intervalVar;
function drawMazeAndRectangle(rectX, RectY) {
  makeWhite(0,0, canvas.width, canvas.height);
  var mazImg = new Image();
  mazImg.onload = function() {
    context.drawImage(mazeImg, 0, 0,);
    drawMazeAndRectangle(rectX, RectY,"#000FF" ,false, true);
    context.beginPath();
    context.arc(542, 122, 7, 0, 2* Math.PI, false);
    context,closePath();
    context.fillStyle = '#FFFFFF';
    context.fill();
  };
function drawRectangle(x, y, style) {
  makeWhite(currRectX, currRectY, 15, 15);
  currentRectX = x;
  currentRectY = y;
  context.beginPath();
  context.rect(x, y, 15, 15);
  context.closePath();
  context.fillStyle = style;
  context.fill();
}
  }

