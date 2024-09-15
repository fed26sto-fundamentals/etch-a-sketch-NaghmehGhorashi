const gridSize = 600;
let btnNewGrid = document.querySelector("#btnNewGrid");
let grid = document.querySelector(".grid");
let btnClearGrid = document.querySelector("#btnClearGrid");


function built(e) {
    grid.innerHTML = "";
    for (let i = 1; i <= e; i++) {
        for (let j = 1; j <= e; j++) {
            const square = document.createElement("div")
            square.classList.add("square")
            let squareSize = gridSize / e;
            square.style.width =`${square}px`
            square.style.height =`${squareSize}px`


            square.addEventListener("mouseover", function mouseover(){
                let randomColor = Math.floor(Math.random() * 16).toString(16);
                square.style.backgroundColor = `#${randomColor}`;
            })
            square.addEventListener("mouseleave", function mouseleave(){
                square.style.backgroundColor = "black";
            });
    

            grid.appendChild(square)
        } 
       
    }
}

btnNewGrid.addEventListener("click", function EnterNumber() {
    let newSize = (prompt("Enter number: "));
    let size = parseInt(newSize);
    if (size > 0 && size <= 100) {
        built(size);

    }
}
)

btnClearGrid.addEventListener("click", function Reset() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "";
    });
});










