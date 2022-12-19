const Movement_Speed =2;
let positionX = 0;
let positionY= 0;

function gameLoop() {
    ctx.clearRect(0,0, canvas.width, canvas.height);

    if (keyPresses.w) {
        positionY -= Movement_Speed;}
        else if (keyPresses.s) {
        positionY += Movement_Speed;
    }
    if (keyPresses.a) {
        positionX -= Movement_Speed;}
        else if (keyPresses.d) {
            positionX += Movement_Speed;
        }
    
    drawFrame(0, 0, positionX, positionY);
    window.requestAnimationFrame(gameLoop);
    }