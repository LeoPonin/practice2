const message = document.querySelector('#message')
const display = document.querySelector('p')
message.addEventListener('input', function (){
    display.textContent = message.value

})