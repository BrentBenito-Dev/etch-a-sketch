// CREATE grid
const grid = document.querySelector("#grid");
const DEFAULT_GRID_SIZE = 16 * 16;
const gridSizeForm = document.querySelector("#gridSizeForm");
const btnBlackBrush = document.querySelector("#blackBrush");
const btnRgbBrush = document.querySelector("#rgbBrush");
const btnShadeBrush = document.querySelector("#shadeBrush");
const menu = document.querySelector("#buttonContainer");
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
        grid.appendChild(gridSquarePixel);
    }    

    const tiles = document.querySelectorAll("#square");
    
    menu.addEventListener("click", (event)=>{
        let target = event.target;
        tiles.forEach(tile => {
            switch(target.id){
                case 'blackBrush':
                    draw(tile);
                    break;
                case 'rgbBrush':
                    rgbDraw(tile);
                    break;
                case 'shadeBrush':
                    shadeDraw(tile);
                    break;
            }
        });
      
    })
  

   
    // btnBlackBrush.addEventListener("click", ()=>{
    //     draw(tile);
    // });
    // btnRgbBrush.addEventListener("click", ()=>{
    //     rgbDraw(tile);
    // });

    // btnShadeBrush.addEventListener("click", ()=>{
    //     shadeDraw(tile);
    // });
  

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
    let min = 0;
    let max = 255;
    let rgbValues = [];

    for (let i = 0; i < 3; i++){
        rgbValues[i] = Math.floor(Math.random()*(max - min +1))+ min;
    }

    square.addEventListener("mouseover", () =>{
        let gridSquareStyle = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
        square.style.backgroundColor = gridSquareStyle;
    });

  

}

function shadeDraw(square){
    square.addEventListener("mouseover", ()=>{
        square.style.background = "rgba(229,229, 229, 0)";
        square.addEventListener("mouseout", ()=>{
            const currentShade = window.getComputedStyle(square).background;
            const rgbaValues = currentShade.match(/[\d.]+/g);
            let r = parseInt(rgbaValues[0].trim());
            let g = parseInt(rgbaValues[1].trim());
            let b= parseInt(rgbaValues[2].trim());
    
            r = Math.max(0, Math.round(r * 0.9)); 
            g = Math.max(0, Math.round(g * 0.9));
            b = Math.max(0, Math.round(b * 0.9));
    
            square.style.background = `rgba(${r}, ${g}, ${b}, 1)`;
        });
    });

   
}

// rgba(${rgbaValues[0]}, ${rgbaValues[1]}, ${rgbaValues[2]}, ${opacity})

// const currentShade = window.getComputedStyle(square).background;
// const rgbaValues = currentShade.match(/[\d.]+/g);
// let opacity = parseFloat(rgbaValues[3]);
// opacity = Math.min(opacity + 0.1, 1);
// square.style.background = `rgba(${rgbaValues[0]}, ${rgbaValues[1]}, ${rgbaValues[2]}, ${opacity})`; 