const inputText = document.querySelectorAll('.input')
const inputSubmit = document.getElementById('submit')
const mensagemDeErro = document.querySelectorAll('.message-error')
const number = document.querySelector('.number')
const userName = document.querySelector('.user')
const date = document.querySelector('.date')
const cvc = document.querySelector('.cvc')
const inputNumber = document.getElementById('number')

inputSubmit.addEventListener ('click', () => 
    inputText.forEach(function (input, indice) {
    event.preventDefault()
    if (input.validity.valid === true) {            
        input.classList.add("valid")
        input.classList.remove("invalid")
        mensagemDeErro[indice].classList.add("message-valid")
    } else {
        input.classList.remove("valid")
        input.classList.add('invalid')
        mensagemDeErro[indice].classList.remove('message-valid')
        mensagemDeErro[indice].classList.add("message-invalid")
    }
})
)


