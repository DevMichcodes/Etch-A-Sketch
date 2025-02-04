const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");

const canvasSize =500;
const gridSize = 16;
const cellSize = canvasSize/gridSize;

ctx.strokeStyle = "black";
ctx.lineWidth = 2;

function drawGrid(){
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

}
drawGrid();

//initializing grid color

let gridColor = [];

for(i=0; i<gridSize; i++){
    gridColor[i]=[];

  for (j=0; j< gridSize; j++){
    gridColor[i][j]= 'white';
}
}
//colors for use

const colors = ['blue', 'red', 'green', 'yellow', 'purple', 'orange'];

// adding event listeners on hover
canvas.addEventListener('mousemove',function(e){
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

//grid cell index based on mouse position
    const xIndex = Math.floor(mouseX / cellSize);
    const yIndex = Math.floor(mouseY / cellSize);

// changing to random colors
 const randomColor = colors[Math.floor(Math.random() * colors.length) ];
 if (gridColor[xIndex][yIndex] !== randomColor) {
    gridColor[xIndex][yIndex] = randomColor; // Assign random color

    ctx.fillStyle = randomColor;
        ctx.fillRect(xIndex * cellSize, yIndex * cellSize, cellSize, cellSize); // Redraw hovered cell
        ctx.strokeStyle = 'black'; // Border color
        ctx.strokeRect(xIndex * cellSize, yIndex * cellSize, cellSize, cellSize); // Redraw border
 }
});
