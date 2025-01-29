// CREATE grid
const grid = document.querySelector("#grid")

function gridSquare(){
    const gridSquarePixel = document.createElement("div");
    gridSquarePixel.setAttribute("class", "grid-square-pixel") 
    gridSquarePixel.style.border = ".1em solid black";  
    gridSquarePixel.style.padding = ".75rem"
    gridSquarePixel.style.flex = "1 0 0%";
    grid.appendChild(gridSquarePixel);
}
function drawGrid(){
    for (let i = 1; i <= 256;i++){
       gridSquare(); 
    }
}



drawGrid();