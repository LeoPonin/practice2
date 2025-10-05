const box = document.getElementById("box")
const buttonAdd = document.querySelector("#add")
const buttonRemove = document.querySelector("#remove")
const buttonToggle = document.querySelector("#toggle")

buttonAdd.addEventListener("click", () => {
  box.classList.add("bordered")
})
buttonRemove.addEventListener("click", () => {
  box.classList.remove("bordered")
})
buttonToggle.addEventListener("click", () => {
  box.classList.toggle("bordered")
})
 