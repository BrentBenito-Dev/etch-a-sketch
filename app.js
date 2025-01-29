// CREATE grid
const grid = document.querySelector("#grid");
const DEFAULT_GRID_SIZE = 16 * 16;
const gridSizeForm = document.querySelector("#gridSizeForm");
let gridSize;

gridSizeForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formData = new FormData(gridSizeForm);
    gridSize = formData.get("gridSizeNum") * formData.get("gridSizeNum");
    drawGrid();
});

function drawGrid(){
    if (gridSize == undefined){
        gridSize = DEFAULT_GRID_SIZE;
    }
    for (let i = 1; i <= gridSize ;i++){
        const gridSquarePixel = document.createElement("div");
        gridSquarePixel.setAttribute("class", "grid-square-pixel"); 
        gridSquarePixel.setAttribute("id", "square");
    
        gridSquarePixel.addEventListener("mouseover", () =>{
            gridSquarePixel.style.background = "black";
        }); 

        gridSquarePixel.style.width = "100%"
        grid.appendChild(gridSquarePixel);
    }  
}
