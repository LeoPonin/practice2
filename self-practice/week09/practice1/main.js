
const submitButton = document.querySelector("#submit")
const form = document.querySelector("form")
console.log(submitButton)

const messageP = form.querySelector('p')

submitButton.addEventListener("click", (e) => {
  e.preventDefault()

  messageP.textContent = ''

  const password = document.querySelector('#password').value
  const confirm = document.querySelector('#confirm-password').value
  if (password !== confirm) {
    messageP.textContent = "password and confirm do not match, please try again"
    messageP.style.color = "red"
    return
  }

  const inputElements = document.querySelectorAll('input')
  let missing = false
  inputElements.forEach((ele) => {
    const attr = ele.getAttribute('type')
    if (attr === 'text' || attr === 'email' || attr === 'password') {
      if (ele.value.trim().length === 0) missing = true
    }
  })

  if (missing) {
    messageP.textContent = "missing some value, please try again"
    messageP.style.color = "red"
    return
  }

  messageP.textContent = 'your data completed'
  messageP.style.color = 'green'

})
 