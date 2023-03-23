const inputText = document.getElementById("inputText")
const inputPassword = document.getElementById("inputPassword")
const inputNumber = document.getElementById("inputNumber")
const inputEmail = document.getElementById("inputEmail")
const inputGenderMale = document.getElementById("inputGenderMale")
const inputGenderFemale = document.getElementById("inputGenderFemale")
const buttonSubmit = document.getElementById("buttonSubmit")
const divError = document.getElementById("divError")

const asynchronous = document.getElementById("asynchronous")


buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const name = inputText.value

    var errorText = ""
    if (!name.includes(' ')) {
        errorText += "Name must contain a space. \n"
    }

    var password = inputPassword.value
    if (password.length < 8) {

        errorText += "Password must be at least 8 characters. \n"

    }


    const age = inputNumber.value
    if (age < 18) {

        errorText += "You must be at least 18 years old. \n"

    }

    const email = inputEmail.value

    // validate the email without regex
    if (!email.includes('@gmail.com' || '@yahoo.com' || '@hotmail.com')) {
            
            errorText += "Email must be a valid email address. \n"
    
    }

    divError.innerText = errorText
})