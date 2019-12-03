const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height= 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    if(x == null) {
        let mousePos = getTouchPos(canvas, event);
        x = mousePos.x
        y = mousePos.y
    }
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function getTouchPos(canvasDom, touchEvent) {
    var rect = canvasDom.getBoundingClientRect();
    return {
      x: touchEvent.touches[0].clientX - rect.left,
      y: touchEvent.touches[0].clientY - rect.top
    };
  }

if(canvas) {
    canvas.addEventListener("touchmove",onMouseMove);
    canvas.addEventListener("touchstart",startPainting);
    canvas.addEventListener("touchend",stopPainting);
    canvas.addEventListener("touchcancel", stopPainting);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}
