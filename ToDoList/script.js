const editBtns = document.querySelectorAll("[data-edit]");
const deleteBtns = document.querySelectorAll("[data-delete]");
const editBtnsContent = document.querySelectorAll("[data-edit-content]");
const confirmBtns = document.querySelectorAll("[data-confirm]");
const optionsDiv = document.querySelectorAll("[data-options]");
const contentDiv = document.querySelectorAll("[data-content]");
elementDivs = document.querySelectorAll("[data-element]");
priorityDivs = document.querySelectorAll("[data-priority]");
priorityDivs.forEach((priorityDiv) => {
  divcount = priorityDiv.childElementCount;
  editId = priorityDiv.id.slice(-1) - 1;
  if (divcount === 3) {
    contentDiv.item(editId).classList.add("high");
  } else if (divcount === 2) {
    contentDiv.item(editId).classList.add("medium");
  } else if (divcount === 1) {
    contentDiv.item(editId).classList.add("low");
  }
  console.log(priorityDiv.childElementCount);
});
editBtns.forEach((element) => {
  element.addEventListener("click", () => {
    editId = element.id.slice(-1) - 1;

    console.log(elementDivs.item(editId).offsetHeight);
    optionsDiv.item(editId).style.opacity = 1;
    optionsDiv.item(editId).style.visibility = "visible";
    contentDiv.item(editId).style.opacity = 0;
    contentDiv.item(editId).style.visibility = "hidden";
  });
});
confirmBtns.forEach((element) => {
  element.addEventListener("click", () => {
    editId = element.id.slice(-1) - 1;
    console.log(editId);

    contentDiv.item(editId).style.opacity = 1;
    contentDiv.item(editId).style.visibility = "visible";
    optionsDiv.item(editId).style.opacity = 0;
    optionsDiv.item(editId).style.visibility = "hidden";
  });
});
deleteBtns.forEach((element) => {
  element.addEventListener("click", () => {
    editId = element.id.slice(-1) - 1;
    elementDivs.item(editId).remove();
  });
});
