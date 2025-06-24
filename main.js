const task = document.getElementById('task');
const addButton = document.getElementById('addtask');
const taskList = document.getElementById('tasklist');
const form = document.getElementById('to-do-form');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = task.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  task.value = "";
});
