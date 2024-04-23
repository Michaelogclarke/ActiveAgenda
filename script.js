const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTaskButton = document.getElementById("add-task-button");
const formButton = document.getElementById("formbtn");
const taskButton = document.getElementById("taskbtn");
function addTask() {
  // Check if the input box is visible using its style.display property
  if (inputBox.style.display !== "none") {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  } else {
    alert("You must write something!");
  }

  inputBox.value = "";
  saveData();
}

showInputBox(); // Call this function initially (outside any event listeners) to set the initial visibility

// Add click event listener to the addTaskButton
addTaskButton.addEventListener("click", addTask);
formButton.addEventListener("click", showForm);
taskButton.addEventListener("click", addTask);

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function showForm() {
  document.getElementById("input-box").style.display = "block";
  document.getElementById("formbtn").style.display = "none";
  document.getElementById("taskbtn").style.display = "block";
}
