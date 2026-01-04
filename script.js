let grid = 16 * 16;
let customGrid;

const container = document.querySelector("#container");

const btn = document.querySelector("button");

const generateGrid = (grid) => {
    for (let i = 0; i < grid; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);

        gridItem.addEventListener('mouseover', () => gridItem.classList.add("hover"));
    }
}

generateGrid(grid);

btn.addEventListener('click', () => {
    let userInput = prompt("Enter the number of squares per side for the new grid");
    if (parseInt(userInput) > 100) {
        alert("Maximum number of squares per side exceeded! Should not be greater than 100");
    }
    else {
        customGrid = parseInt(userInput) * parseInt(userInput);
    }

    if(customGrid) {
        container.textContent = "";
        generateGrid(customGrid);
    }

});

