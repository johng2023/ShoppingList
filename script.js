const itemForm = document.getElementById("item-form");
const input = document.getElementById("item-input");
const itemList = document.querySelector("ul");
const clear = document.querySelector("#clear");
const filter = document.querySelector("#filter");

function addItem(e) {
  e.preventDefault();

  const newItem = input.value;

  if (newItem === "") {
    alert("Add an Item");
    return;
  }
  //   create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  //   add li to dom

  itemList.appendChild(li);

  checkUI();

  input.value = "";
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.append(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
    checkUI();
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}

function checkUI() {
  const items = itemList.querySelectorAll("li");
  if (items.length === 0) {
    clear.style.display = "none";
    filter.style.display = "none";
  } else {
    clear.style.display = "block";
    filter.style.display = "block";
  }
}

// Event Listeners

itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clear.addEventListener("click", clearItems);

checkUI();
