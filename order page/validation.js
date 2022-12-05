const dateInput = document.getElementById("deliveryDate")
const tomorrow = new Date(new Date().getTime() + 86400000)
const YYYY = tomorrow.getFullYear()
const month = tomorrow.getMonth() + 1
const MM = month > 9 ? "" + month : "0" + month
const day = tomorrow.getDate()
const DD = day > 9 ? "" + day : "0" + day
const tomorrowString = `${YYYY}-${MM}-${DD}`
dateInput.setAttribute("min", tomorrowString)

const formState = {}

let inputs = document.querySelectorAll('.input');
inputs.forEach(input => {
    input.addEventListener('blur', () => {
        validate();
    })
    input.addEventListener('change', (e) => {
        formState[e.target.id] = e.target.value
    })
})

function validate() {
    let inputs = document.querySelectorAll('.input');

    let isFormValid = true;
    inputs.forEach(input => {
        isFormValid = isFormValid && input && !!input.value && input.validity.valid
    });

    let submitBtn = document.getElementById('btn1')
    if (isFormValid) {
        submitBtn.removeAttribute('disabled')
    } else {
        submitBtn.setAttribute('disabled', 'true');
    }
}

let btn1 = document.getElementById('btn1')
btn1.addEventListener('click', () => {
    let message = "Your order was successfully completed. Find order details below:\n"
    message += `Name: ${formState["name"]} ${formState["surname"]}\n`
    message += `Date: ${formState["deliveryDate"]}\n`
    message += `Address: ${formState["street"]} street, ${formState["house"]}-${formState["flat"]}\n`

    alert(message)
})

