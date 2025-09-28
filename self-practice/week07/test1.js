
const title = document.getElementById("title");
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");
const itemsList = document.getElementById("items");
const addItemBtn = document.getElementById("addItemBtn");

changeBtn.addEventListener("click", () => {
  message.textContent = "hah! im new";
  title.style.color = "pink";
  document.body.style.backgroundColor = "#fffbe6";
  console.log("message changed");
});











//AI
let itemCount = 2; // because we already have 2 items
addItemBtn.addEventListener("click", () => {
  itemCount++;
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${itemCount}`;
  itemsList.appendChild(newItem);
  console.log(`Item ${itemCount} added to the list.`);
});
