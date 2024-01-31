const inputDescription = document.getElementById("description");
const buttonAdd = document.getElementById("submit");
const list = document.getElementById("list");

buttonAdd.addEventListener("click", function () {
  const description = inputDescription.value;
  if (!description) {
    return;
  }
});
const listItem = document.createElement("li");
listItem.className = "lis";
listItem.innerText = description;
