window.onload = function() {

  //generate Cellular Automaton with 101 * 50
  generateCellularAutomaton(101, 50);

  /*setInterval(function() {
    document.body.innerHTML = "";
    generateCellularAutomaton(101, 50);
    //clear body element, remove all of the childern
  }, 1000);*/
}

// set the style for all of the div with row class
let setRowWithStyle = function() {
  let rows = document.getElementsByClassName("row")

  for(let i = 0; i < rows.length; i++) {
    rows[i].style.display = "inline-block";
    //rows[i].style.border = "1px solid black";
    //rows[i].style.padding = "5px";
  }
}

// set the style for all of the div with cell class
let setCellWithStyle = function() {

  let cells = document.getElementsByClassName("cell");

  for(let i = 0; i < cells.length; i++) {
    cells[i].style.border = "1px solid black";
    cells[i].style.height = "8px";
    cells[i].style.width = "8px";
    cells[i].style.float = "left";
    cells[i].style.margin = "2px";
  }
}

// set the style for all of the div with active class
let setActivedWithStyle = function() {
  let actions = document.getElementsByClassName("actived");

  for(let i = 0; i < actions.length; i++) {
    actions[i].style.backgroundColor = "black";
  }
}

// set the style for all of the div with inactive class
let setInactivedWithStyle = function() {

  let inactions = document.getElementsByClassName("inactived");

  for(let i = 0; i < inactions.length; i++) {
    inactions[i].style.backgroundColor = "white";
  }
}

// generate next cell according the 3 cells on last queue
// return 0 or 1 (inactive or active)
let generateCell = function(queue, i) {
  let a = i - 1;
  let b = i;
  let c = i + 1;

  if(a < 0) {
    a = 100;
  } else if(c > 100) {
    c = 0;
  }

  if((queue[a] == 1) && (queue[b] == 1) && (queue[c] == 1)) {
    return 1;
  }

  else if((queue[a] == 1) && (queue[b] == 1) && (queue[c] == 0)) {
    return 0;
  }

  else if((queue[a] == 1) && (queue[b] == 0) && (queue[c] == 1)) {
    return 1;
  }

  else if((queue[a] == 1) && (queue[b] == 0) && (queue[c] == 0)) {
    return 1;
  }

  else if((queue[a] == 0) && (queue[b] == 1) && (queue[c] == 1)) {
    return 0;
  }

  else if((queue[a] == 0) && (queue[b] == 1) && (queue[c] == 0)) {
    return 1;
  }

  else if((queue[a] == 0) && (queue[b] == 0) && (queue[c] == 1)) {
    return 1;
  }

  else if((queue[a] == 0) && (queue[b] == 0) && (queue[c] == 0)) {
    return 0;
  }
}

// generate a 2D array containing all of the
let generateRowsQueue = function(x, y) {
  let rows_queue = [];

  //Init rows_queue
  for(let i = 0; i < y; i++) {
    rows_queue[i] = [];
  }

  //generate first line with random number
  for(let i = 0; i < x; i++) {
    rows_queue[0][i] = Math.floor(Math.random() * 2);
  }

  //generate next 49 line according to last line.
  for(let i = 1; i < 50; i++) {
    for(let j = 0; j < 101; j++) {
      rows_queue[i][j] = generateCell(rows_queue[i - 1], j);
    }
  }

  //return rows queue
  return rows_queue;
}

// draw cell onto web page according the i * j array
let generateRowsWithRowsQueue = function(rows_queue) {
  let options = ["inactived", "actived"];
  let body = document.getElementsByTagName("body")[0];

  for(let i = 0; i < rows_queue.length; i++) {

    let row = document.createElement("div");
    row.className += "row ";

    for(let j = 0; j < rows_queue[i].length; j++) {
      let cell = document.createElement("div");

      cell.className += "cell ";
      cell.className += options[rows_queue[i][j]];

      row.appendChild(cell);
    }

    body.appendChild(row);
  }
}

// generate CellularAutomation with x * y (101 * 50)
let generateCellularAutomaton = function(x, y) {
  // generate 2D array
  let rows_queue = generateRowsQueue(x, y);

  // draw cell onto row according 2D array
  generateRowsWithRowsQueue(rows_queue);

  // add style
  setRowWithStyle();
  setCellWithStyle();

  setActivedWithStyle();
  setInactivedWithStyle();
}
