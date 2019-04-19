const grid = document.querySelector('#container');

let createGrid = window.onload = function() {
  let create = prompt('Input the number of rows and columns.');
  let number = parseInt(create);

  for (i = 0; i < number; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (r = 0; r < number; r++) {
      let box = document.createElement('div');
      box.classList.add('grid-square');
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
