console.log("Hello Javascript")

// Variable, String, and Arrays
// Selection
// Looping
// Function
// Event Handler
// Callback Function
// DOM


console.log(123 == "123")
console.log(123 === "123")

const numberItem = document.getElementById("number-item")

console.log(numberItem)

for(let i = 0; i < 10; i++){
    let numberDiv = document.createElement("div")
    let numberText = document.createTextNode(i)
    
    numberDiv.appendChild(numberText)
    
    numberItem.appendChild(numberDiv)
}

const titles = document.getElementsByClassName("title")

console.log(titles)


const names = [
    "Hady",
    "Irki",
    "Arya",
    "Justine"
]

const nameItem = document.getElementById("people-item")

names.forEach(name => {
    nameItem.innerHTML += `<div> ${name} </div>`
})

const ccForm = document.ccForm

ccForm.addEventListener("submit", event => {
    event.preventDefault()
    console.log("asdas")
})