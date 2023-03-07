const inputText = document.querySelectorAll('.input')
const inputSubmit = document.getElementById('submit')
const number = document.querySelector('.number')
const userName = document.getElementById('user')
const month = document.querySelector('.month')
const year = document.querySelector('.year')
const cvc = document.querySelector('.cvc')
const inputNumber = document.getElementById('number')
const inputName = document.getElementById('name')
const inputMonth = document.getElementById('month')
const inputYear = document.getElementById('year')
const inputCvc = document.getElementById('cvc')
const messageName = document.getElementById('message-name')
const messageNumber = document.getElementById('message-number')
const messageYear = document.getElementById('message-year')
const messageMonth = document.getElementById('message-month')
const messageCvc = document.getElementById('message-cvc')
const formSection = document.querySelector('.formulario')
const thanksPage = document.querySelector('.thanks')
const form = document.querySelector('.form')
const continueButton = document.getElementById('continue')

inputName.addEventListener('input', () => {
    if (inputName.value == '') {
        userName.innerText = 'JANE APPLESEED';
    } else {
        userName.innerText = inputName.value;
    }
})

inputNumber.addEventListener('input', (e) => {
    let inputValue = e.target.value;
    inputNumber.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();

    if (inputNumber.value == '') {
        number.innerText = '0000 0000 0000 0000';
    } else {
        number.innerText = inputNumber.value;
    }
});

inputMonth.addEventListener('input', () => {
    if (inputMonth.value == '') {
        month.innerText = '00';
    } else {
        month.innerText = inputMonth.value;
    }
})

inputYear.addEventListener('input', () => {
    if (inputYear.value == '') {
        year.innerText = '00';
    } else {
        year.innerText = inputYear.value;
    }
})

inputCvc.addEventListener('input', () => {
    if (inputCvc.value == '') {
        cvc.innerHTML = '000'
    } else {
        cvc.innerHTML = inputCvc.value
    }
})

inputSubmit.addEventListener('click', () =>
    inputText.forEach(function (input) {
        event.preventDefault()
        if (inputName.validity.valid == true) {
            messageName.classList.add('message-valid')
            messageName.classList.remove('message-invalid')
            inputName.classList.add('valid')
            inputName.classList.remove('invalid')
        } else {
            messageName.classList.remove('message-valid')
            messageName.classList.add('message-invalid')
            inputName.classList.remove('valid')
            inputName.classList.add('invalid')
        }

        if (inputNumber.value.length == 19) {
            messageNumber.classList.add('message-valid')
            messageNumber.classList.remove('message-invalid')
            inputNumber.classList.add('valid')
            inputNumber.classList.remove('invalid')
        } else {
            messageNumber.classList.remove('message-valid')
            messageNumber.classList.add('message-invalid')
            inputNumber.classList.remove('valid')
            inputNumber.classList.add('invalid')
        }

        if (inputMonth.value.length == 2) {
            messageMonth.classList.add('message-valid')
            messageMonth.classList.remove('message-invalid')
            inputMonth.classList.add('valid')
            inputMonth.classList.remove('invalid')
        } else {
            messageMonth.classList.remove('message-valid')
            messageMonth.classList.add('message-invalid')
            inputMonth.classList.remove('valid')
            inputMonth.classList.add('invalid')
        }

        if (inputYear.value.length == 2) {
            messageYear.classList.add('message-valid')
            messageYear.classList.remove('message-invalid')
            inputYear.classList.add('valid')
            inputYear.classList.remove('invalid')
        } else {
            messageYear.classList.remove('message-valid')
            messageYear.classList.add('message-invalid')
            inputYear.classList.remove('valid')
            inputYear.classList.add('invalid')
        }

        if (inputCvc.value.length == 3) {
            messageCvc.classList.add('message-valid')
            messageCvc.classList.remove('message-invalid')
            inputCvc.classList.add('valid')
            inputCvc.classList.remove('invalid')
        } else {
            messageCvc.classList.remove('message-valid')
            messageCvc.classList.add('message-invalid')
            inputCvc.classList.remove('valid')
            inputCvc.classList.add('invalid')
        }
        
        if (inputName.validity.valid == true && inputNumber.value.length == 19 && inputMonth.value.length == 2 && inputYear.value.length == 2 && inputCvc.value.length == 3) {
            formSection.classList.remove('selecionado')
            thanksPage.classList.add('selecionado')
        }
    }
    )
)

continueButton.addEventListener('click', function () {
    thanksPage.classList.remove('selecionado')
    formSection.classList.add('selecionado')
})
