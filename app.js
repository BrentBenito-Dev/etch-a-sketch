// CREATE grid
const grid = document.querySelector("#grid");
const DEFAULT_GRID_SIZE = 16 * 16;
const gridSizeForm = document.querySelector("#gridSizeForm");
let gridSize;

gridSizeForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formData = new FormData(gridSizeForm);
    gridSize = formData.get("gridSizeNum");
    if (gridSize != 0){
        clearGrid();
    }

    if(gridSize < 100){
        drawGrid(gridSize);
    }else{
        alert("The grid is too big!")
    }
});

function drawGrid(size){
    if (gridSize == undefined){
        gridSize = DEFAULT_GRID_SIZE;
    }
    for (let i = 1; i <= size * size;i++){
        const gridSquarePixel = document.createElement("div");
        gridSquarePixel.setAttribute("class", "grid-square-pixel"); 
        gridSquarePixel.setAttribute("id", "square");
        grid.appendChild(gridSquarePixel);
        
        gridSquarePixel.addEventListener("mouseover", () =>{
            gridSquarePixel.style.background = "black";
        }); 
    
    }  
    const gridSquareSize = 100 / size;
    const gridSquareStyle = `width: ${gridSquareSize}%; height: ${gridSquareSize}%;`;
    const gridSquares = document.querySelectorAll(".grid-square-pixel")
    gridSquares.forEach(square => {
        square.style.cssText = gridSquareStyle;
    });

   
}

function clearGrid(){
    while(grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
}