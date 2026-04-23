document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create list item
  let li = document.createElement("li");

  // Text span (so we can strike only text)
  let span = document.createElement("span");
  span.textContent = taskText;

  // Complete button
  let completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";

  completeBtn.onclick = function () {
    span.style.textDecoration = "line-through";
    completeBtn.style.display = "none";
  };

  // Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.onclick = function () {
    li.remove();
  };

  // Add elements to list item
  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // Add to page
  document.getElementById("taskList").appendChild(li);

  // Clear input
  input.value = "";

  // AJAX write (simple version)
  saveTasks();
}

// AJAX (simple example write)
function saveTasks() {
  let list = document.getElementById("taskList").innerHTML;

  fetch("tasks.txt", {
    method: "POST",
    body: list
  });
}