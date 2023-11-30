function addRow() {
  var table = document.getElementById("customerTable");
  var newRow = table.insertRow(-1); // Insert a new row at the end

  var properties = [
    "process",
    "arrival",
    "burst",
    "complete",
    "turnaround",
    "waiting",
  ];

  for (var i = 0; i < properties.length; i++) {
    var cell = newRow.insertCell(i);
    if (i < 3) {
      var input = document.createElement("input");
      input.type = "text";
      input.className = "input-cell";
      cell.appendChild(input);
    } else {
      cell.className = "result-cell";
      cell.textContent = "DATA";
    }
  }
}

function deleteRow() {
  var table = document.getElementById("customerTable");
  if (table.rows.length > 2) {
    table.deleteRow(-1); // Delete the last row
  }
}

function calculateFCFS() {
  var table = document.getElementById("customerTable");
  var rows = table.rows;
  var start = rows[1].cells[1];
  var start = parseInt(start.querySelector("input").value);
  for (var i = 1; i < rows.length; i++) {
    var arrivalCell = rows[i].cells[1];
    var burstCell = rows[i].cells[2];
    var completeCell = rows[i].cells[3];
    var turnaroundCell = rows[i].cells[4];
    var waitingCell = rows[i].cells[5];

    var arrivalTime = parseInt(arrivalCell.querySelector("input").value);
    var burstTime = parseInt(burstCell.querySelector("input").value);

    start += burstTime;
    var completeTime = start;
    var turnaroundTime = completeTime - arrivalTime;
    var waitingTime = turnaroundTime - burstTime;

    completeCell.textContent = completeTime;
    turnaroundCell.textContent = turnaroundTime;
    waitingCell.textContent = waitingTime;
  }
}
