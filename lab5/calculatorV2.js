let history = [];

function append(value) {
  history.push(document.getElementById("display").value);
  document.getElementById("display").value += value;
}

function undo() {
  if (history.length > 0) {
    document.getElementById("display").value = history.pop();
  }
}

function calculate() {
  try {
    history.push(document.getElementById("display").value);
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    alert("Invalid expression");
  }
}

function clearDisplay() {
  history = [];
  document.getElementById("display").value = "";
}
