const inputUsername = document.getElementById("username")
const inputEmail = document.getElementById("email")
const inputPassword = document.getElementById("password")
const inputConfirm = document.getElementById("confirm")
const inputAgreement = document.getElementById("user-agreement")

const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const confirmError = document.getElementById("confirmError")
const agreeError = document.getElementById("agreeError")

const buttonSubmit = document.getElementById("sign-btn")


function validatePasswordNumberUpperLower(password) {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz"
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var number = "0123456789"
    var lower = false
    var upper = false
    var num = false

    for (var i = 0; i < password.length; i++) {
        if (lowerCase.includes(password[i])) {
            lower = true
        }
        if (upperCase.includes(password[i])) {
            upper = true
        }
        if (number.includes(password[i])) {
            num = true
        }
    }

    if (lower && upper && num) {
        return true
    }
    else {
        return false
    }


}

buttonSubmit.addEventListener("click", (event)=>{
    event.preventDefault()

    var nameerrorText = ""
    var emailerrorText = ""
    var passerrorText = ""
    var confirmerrorText = ""
    var agree = ""
    //Validasi Username, minimal 8 karakter
    const name = inputUsername.value
    if(name.length < 8){
        nameerrorText = "Username should be 8 characters or more!"
    }
    else{
        nameerrorText="\n"
    }
    
    // Validasi Email, harus mengandung "@gmail.com"
    const email = inputEmail.value
    if(!email.includes("@gmail.com") || email.length <= 10){
        emailerrorText = "Email should be a valid gmail mail!"
    }
    else{
        emailerrorText="\n"
    }

    // Validasi Password, terdiri dari minimal 8 karakter
    const password = inputPassword.value
    if(password.length < 8){
        passerrorText = "Minimal consist of 8 characters"
    }else if( !validatePasswordNumberUpperLower(password) ){
        passerrorText = "Password should be consist of at least 1 number, 1 uppercase, and 1 lowercase!"
    }else{
        passerrorText="\n"
    }

    // Validasi Password confirm, harus sama dengan password
    const confirm = inputConfirm.value
    if (confirm.length == 0) {
        confirmerrorText = "Must be filled"
    }
    else if(confirm != password){
        confirmerrorText = "Password not match!"
    }
    else{
        confirmerrorText="\n"
    }

    const Agreement = inputAgreement.checked

    
    nameError.innerText = nameerrorText
    emailError.innerText = emailerrorText
    passwordError.innerText = passerrorText
    confirmError.innerText = confirmerrorText

    if(nameError.innerText != ""){
        inputUsername.style.border = "1px red solid" ;
    }
    if(nameError.innerText=="\n"){
        inputUsername.style.border = "1px green solid" ;
    }

    if(emailError.innerText != ""){
        inputEmail.style.border = "1px red solid" ;
    }
    if(emailError.innerText=="\n"){
        inputEmail.style.border = "1px green solid" ;
    }
    
    if(passwordError.innerText != ""){
        inputPassword.style.border = "1px red solid" ;
    }
    if(passwordError.innerText=="\n"){
        inputPassword.style.border = "1px green solid" ;
    }
    
    if(confirmError.innerText != ""){
        inputConfirm.style.border = "1px red solid" ;
    }
    if(confirmError.innerText=="\n"){
        inputConfirm.style.border = "1px green solid" ;
    }

    if ( nameerrorText=="" && emailerrorText == "" && passerrorText == "" && confirmerrorText=="" && Agreement) {
        alert("Register Sucessfully!")
    }
})