
const submitButton = document.querySelector("#submit")
const form = document.querySelector("form")
const pass = document.querySelector("")
console.log(submitButton)

submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  //validate data
  const inputElements = document.querySelectorAll("input")
  inputElements.forEach((ele) => {
    const attr = ele.getAttribute("type")
    if (attr === "text") {
      if (ele.value.trim().length === 0) console.log("invalid data")
        const p =document.createElement('p')
        p.textContent= "missing some value, please try again"
        form.appendChild(p).style.color="red"
    }if ()
  })
})
 