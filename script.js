const container = document.querySelector("#container");
let initgridSize = 16;
function createGrid(gridSize) {
    let gridArea = gridSize * gridSize;
    container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);
                            grid-template-rows: repeat(${gridSize}, 1fr)`;
    for (i = 1; i <= gridArea; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        container.appendChild(div);
    }
    let divs = document.querySelectorAll('.grid-item');
    divs.forEach(div => div.addEventListener('mouseover', colorGrid));
}
function colorGrid() {
    this.style.backgroundColor = 'black';
}


createGrid(initgridSize);