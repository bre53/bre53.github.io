let tasks = [];

document.getElementById("addBtn").addEventListener("click", addTask);

window.addEventListener("load", loadTasks);

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  let task = {
    text: taskText,
    completed: false
  };

  tasks.push(task);

  renderTasks();
  saveTasks();

  input.value = "";
}

function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.addEventListener("click", function () {
      tasks[index].completed = true; // variable change triggers UI change
      renderTasks();
      saveTasks();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1); // update data
      renderTasks();
      saveTasks();
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });
}

function saveTasks() {
  fetch("tasks.txt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tasks)
  });
}

function loadTasks() {
  fetch("tasks.txt")
    .then(response => response.json())
    .then(data => {
      tasks = data || [];
      renderTasks();
    })
    .catch(() => {
      tasks = [];
    });
}