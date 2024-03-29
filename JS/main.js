let area = document.getElementsByClassName("area")[0]
let cell = document.getElementsByClassName("cell")
let button = document.getElementById("restart")

button.addEventListener("click", () => {
  for (let i = 0; i < cell.length; i++) {
    cell[i].textContent = "";
    document.querySelector(".results").innerHTML = ""
    EnableClicks()
    removeWinningCellClass()
  }
})

for (let i = 1; i <= 9; i++) {
  let newCell = document.createElement("div")
  newCell.className = "cell"
  newCell.setAttribute("data-position", i)
  area.appendChild(newCell)
}

let player = "X"

function EnableClicks() {
  for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", Click, false)
  }
}

EnableClicks()

function disableCellClicks() {
  for (let i = 0; i < cell.length; i++) {
    cell[i].removeEventListener("click", Click, false)
  }
}

function Click() {
  if (!this.innerHTML) {
    this.innerHTML = player
  } else {
    return
  }

  let data = []

  for(var i in cell){
    if(cell[i].innerHTML == player){
        data.push(parseInt(cell[i].getAttribute('data-position')))
    }
  }

  if (player === "X") {
    player = "O"
    document.querySelector(".bg").style.left = "85px"
  } else {
    player = "X"
    document.querySelector(".bg").style.left = ""
  }

  let currentPlayer = player === "X" ? "O" : "X"

  if (checkWin(data)) {
    document.querySelector(".results").innerHTML = `${currentPlayer} won!`
    disableCellClicks()
  } else if (checkDraw()) {
    document.querySelector(".results").innerHTML = "Draw!"
  }
}

function checkWin(data) {
  let winVariants = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ]
    let winningCells = []

    for (let i in winVariants) {
        let win = true
        for (let j in winVariants[i]) {
            let id = winVariants[i][j]
            let index = data.indexOf(id)

            if (index == -1) win = false
        }
        if (win) {
          winningCells = winVariants[i]
          break
        }
    }

    if (winningCells.length > 0) {
      highlightWinningCells(winningCells)
      return true
    }

    return false
}

function checkDraw() {
  let draw = true
  for (let i in cell) {
    if (cell[i].innerHTML == "") draw = false
  }
  if (draw) return true
}

function highlightWinningCells(winningCells) {
  for (let i = 0; i < cell.length; i++) {
    let cellPosition = parseInt(cell[i].getAttribute('data-position'))
    if (winningCells.includes(cellPosition)) {
      cell[i].classList.add("winning-cell")
    }
  }
}

function removeWinningCellClass() {
  for (let i = 0; i < cell.length; i++) {
    cell[i].classList.remove("winning-cell")
  }
}


