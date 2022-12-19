let keyPresses = {};

window.addEventListener('keydown', keyDownListener, false);
function keyDownListener(event) {
    keyPresses[event.key] =true;
}

window.addEventListener('keyup', keyUpListener, false);
function keyUpListener(event) {
    keyPresses[event.key] =false;
}

window.addEventListener('mousedown', mouseLeftListener, false);
function mouseLeftListener(event) {
    keyPresses[event.key] =false;
}

window.addEventListener('mouseRight', mouseRightListener, false);
function mouseRightListener(event) {
    keyPresses[event.key] =false;
}