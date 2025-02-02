// CREATE grid
const grid = document.querySelector("#grid");
const DEFAULT_GRID_SIZE = 16 * 16;
const gridSizeForm = document.querySelector("#gridSizeForm");
const btnBlackBrush = document.querySelector("#blackBrush");
const btnRgbBrush = document.querySelector("#rgbBrush");
const btnShadeBrush = document.querySelector("#shadeBrush");
let truth = true;

let gridSize;
let j = 1;

gridSizeForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formData = new FormData(gridSizeForm);
    gridSize = formData.get("gridSizeNum");
    if (gridSize != 0){
        clearGrid();
    }

    if (gridSize == 0){
        alert("Invalid Grid!");
    }

    if(gridSize < 100){
        drawGrid(gridSize);
    }else{
        alert("The grid is too big!")
    }
});





//rgbDraw();

function drawGrid(size){
    if (gridSize == undefined){
        gridSize = DEFAULT_GRID_SIZE;
    }
    for (let i = 1; i <= size * size;i++){
        const gridSquarePixel = document.createElement("div");
        gridSquarePixel.setAttribute("class", "grid-square-pixel"); 
        gridSquarePixel.setAttribute("id", "square");
        gridSquarePixel.style.background = "background:rgba(0, 0, 0, 0%) ";
        grid.appendChild(gridSquarePixel);
    }    

    const tiles = document.querySelectorAll("#square");
    btnBlackBrush.addEventListener("click", ()=>{
        tiles.forEach(tile => {
            draw(tile);
        });
    });

    btnRgbBrush.addEventListener("click", ()=>{
        tiles.forEach(tile => {
            rgbDraw(tile);
        });
    });

    btnShadeBrush.addEventListener("click", ()=>{
        tiles.forEach(tile => {
            shadeDraw(tile);
        });
    });


  

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

function draw(square){
    const gridSquares = square;

    gridSquares.addEventListener("mouseover", () =>{
        gridSquares.style.background = "rgba(0, 0, 0, 100%)";
    });
}

function rgbDraw(square){
    const gridSquares = square;
    let min = 0;
    let max = 255;
    let rgbValues = [];

    for (let i = 0; i < 3; i++){
        rgbValues[i] = Math.floor(Math.random()*(max - min +1))+ min;
    }

    gridSquares.addEventListener("mouseover", () =>{
        let gridSquareStyle = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
        gridSquares.style.backgroundColor = gridSquareStyle;
    });

}

function shadeDraw(square){
    const gridSquares = square;
    square.addEventListener("mouseover", ()=>{
        const currentShade = window.getComputedStyle(square).background;
        const rgbaValues = currentShade.match(/[\d.]+/g);
        let opacity = parseFloat(rgbaValues[3]);
        opacity = Math.min(opacity + 0.1, 0.99);
        gridSquares.style.background = `rgba(0, 0, 0, ${opacity})`;        
    })
}

// rgba(${rgbaValues[0]}, ${rgbaValues[1]}, ${rgbaValues[2]}, ${opacity})

