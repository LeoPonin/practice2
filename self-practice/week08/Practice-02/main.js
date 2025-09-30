// const buttons = document.getElementsByTagName("button")
// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", () => {
//     document.querySelector("button[data-color='red']").style.color
//     //write code here.... (common code)
//   })
// })















const buttonRed = document.querySelector("button[data-color='red']")
const buttonblue = document.querySelector("button[data-color='blue']")
const buttongreen = document.querySelector("button[data-color='green']")
console.log(buttonRed)
const box = document.getElementById("box")
buttonRed.addEventListener("click", () => {
    box.style.background = ("red")
  //write your code here (separate code in each button)
})

buttonblue.addEventListener("click", () => {
    box.style.background = ("blue")
  //write your code here (separate code in each button)
})

buttongreen.addEventListener("click", () => {
    box.style.background = ("green")
  //write your code here (separate code in each button)
})
 
 