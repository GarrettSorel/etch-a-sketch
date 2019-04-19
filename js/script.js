const grid = document.querySelector('#container');

function createGrid (num) {
  for (i = 0; i < num; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (r = 0; r < num; r++) {
      let box = document.createElement('div');
      box.classList.add('grid-square');
      box.style.height = (960 / num) + "px";
      box.style.width = (960 / num) + "px";
      row.appendChild(box);
    }
    grid.appendChild(row);
  }
  changeColor()
}

function changeColor() {
  let getBox = document.querySelectorAll('.grid-square');
    getBox.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "white";
    });
    });
}

function resetGrid () {
  let deleteRows = document.querySelectorAll('.row');

  for (i = 0; i < deleteRows.length; i++) {
    let deleteRow = document.querySelector('.row');
    container.removeChild(deleteRow);
  }


  let create = prompt('Input the number of rows and columns.');
  let number = parseInt(create);
  createGrid(number);
}

window.onload = createGrid(16);
