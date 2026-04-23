document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = taskText;

  let completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";

  completeBtn.onclick = function () {
    span.style.textDecoration = "line-through";
    completeBtn.style.display = "none";
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";

  saveTasks();
}

function saveTasks() {
  let list = document.getElementById("taskList").innerHTML;

  fetch("tasks.txt", {
    method: "POST",
    body: list
  });
}