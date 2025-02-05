const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");

const canvasSize =500;
let gridSize = 16;
let cellSize = canvasSize/gridSize;

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
function initialiseGridColor(){
for(i=0; i<gridSize; i++){
    gridColor[i]=[];

  for (j=0; j< gridSize; j++){
    gridColor[i][j]= 'white';
}
}
}
initialiseGridColor();
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
//reset the sketch pad

const resetSketch = document.getElementById('resetButton');
  resetSketch.addEventListener('click',function(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
    initialiseGridColor();
    drawGrid();
  });

  //changing to different grid sizes

  const inputNewGrid = document.getElementById('gridSizeInput');
  const newGridButton = document.getElementById('resetGridSizeButton');
      newGridButton.addEventListener('click', function(){

        let newSize = parseInt(inputNewGrid.value);
          // Ensure grid size is within the valid range (1 to 100)
    if (newSize < 1) newSize = 1;
    if (newSize > 100) newSize = 100;

    gridSize = newSize;
    cellSize = canvasSize / gridSize;


    ctx.clearRect(0,0, canvas.width, canvas.height);
    initialiseGridColor();
    drawGrid();


      });