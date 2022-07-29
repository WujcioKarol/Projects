const taskList = document.querySelector(".tasks-list");
const inputTask = document.querySelector("#input_task");
const addButton = document.querySelector(".fa-plus");
let TaskElements = document.querySelectorAll(".task-elem");
let delBtn = document.querySelectorAll(".fa-trash");
let doneBtn = document.querySelectorAll(".fa-clipboard-check");
function task(name) {
  return `
    <div class='task-name'>
        <p>${name}</p>
    </div>
    <div class="task-buttons">
        <a class='icon'><i class="fa fa-clipboard-check"></i></a>
        <a><i class="fa fa-trash icon" aria-hidden="true"></i></a>
    </div>
`;
}
var Tasks = localStorage.getItem("Tasks");
var Tasks = Tasks ? JSON.parse(Tasks) : {};
downloadTasks();
updateTasks();
inputTask.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask(inputTask.value, false);
    updateTasks();
  }
});
function addTask(name, state) {
  Object.assign(Tasks, { [name]: state });
  localStorage.clear();
  localStorage.setItem("Tasks", JSON.stringify(Tasks));
  delBtn = document.querySelectorAll(".fa-trash");
}
function downloadTasks() {
  return JSON.parse(localStorage.getItem("Tasks"));
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function updateTasks() {
  removeAllChildNodes(taskList);
  Object.entries(Tasks).map((taskElem) => {
    var taskdiv = document.createElement("div");
    taskdiv.setAttribute("class", "task-elem");
    taskdiv.innerHTML = task(taskElem[0]);
    if (taskElem[1] === true) {
      taskdiv.classList.add("done");
    }
    taskList.appendChild(taskdiv);
  });
  delBtn = document.querySelectorAll(".fa-trash");
  delBtn.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      key = e.target.parentElement.parentElement.parentElement.innerText;
      key = key.replace(/[\r\n]/gm, "");
      key = key.trim();
      delete Tasks[key];
      e.target.parentElement.parentElement.parentElement.remove();
      localStorage.setItem("Tasks", JSON.stringify(Tasks));
    });
  });
  doneBtn = document.querySelectorAll(".fa-clipboard-check");
  doneBtn.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.parentElement.classList.toggle(
        "done"
      );
      key = e.target.parentElement.parentElement.parentElement.innerText;
      key = key.replace(/[\r\n]/gm, "");
      key = key.trim();

      Tasks[key] = Tasks[key] == true ? false : true;
      localStorage.clear();
      localStorage.setItem("Tasks", JSON.stringify(Tasks));
    });
  });
}
