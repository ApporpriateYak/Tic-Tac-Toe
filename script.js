const cells = document.querySelectorAll('.cell');
let playerone = false;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

cells.forEach(cell => {
    cell.addEventListener('click', function() {
        if (cell.classList.contains("filled")) return;

        if (playerone) {
            cell.innerText = 'O';
        } else {
            cell.innerText = 'X';
        }

        cell.classList.add("filled");
        playerone = !playerone;
        checkWinner();
    });
});


  const enableCells = () => {
    cells.forEach(cell => {
      cell.classList.remove("filled");
      cell.innerText = "";
    });
  };
  

  const disableCells = () => {
    cells.forEach(cell => {
      cell.classList.add("filled");
    });
  };
  
  function checkWinner() {
    for (let pattern of winPatterns) {
      let [a, b, c] = pattern;
  
      let cellA = cells[a].innerText;
      let cellB = cells[b].innerText;
      let cellC = cells[c].innerText;
  
      if (cellA !== "" && cellA === cellB && cellB === cellC) {
        alert(`${cellA} wins!`);
        disableCells(); // prevent further moves
        return;
      }
    }
  
    // Check for a draw (optional)
    let allFilled = Array.from(cells).every(cell => cell.classList.contains("filled"));
    if (allFilled) {
      alert("It's a draw!");
    }
  }
  