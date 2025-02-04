const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");

const canvasSize =500;
const gridSize = 16;
const cellSize = canvasSize/gridSize;

ctx.strokeStyle = "black";
ctx.lineWidth = 1;

// drawing the vertical lines

for(x=0; x<= gridSize*cellSize; x += cellSize){
    ctx.beginPath();
    ctx.moveTo(x,0);
    ctx.lineTo(x, gridSize*cellSize);
    ctx.stroke();
}

  // Draw horizontal lines
  for (let y = 0; y <= gridSize * cellSize; y += cellSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(gridSize * cellSize, y);
    ctx.stroke();
}