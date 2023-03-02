console.log("Hello JavaScript");


// let   -> local
// var   -> global
// const -> global & remains constant

// let a = "Hello";

// console.log(a);

let numberItem = document.getElementById("number-item");

// console.log(numberItem);

for (let i = 0; i < 10; i++) {
    let numberDiv = document.createElement("div");
    numberDiv.appendChild(document.createTextNode(i));
    numberItem.appendChild(numberDiv);
}

// const numberDiv = document.createElement("div");
// numberDiv.appendChild(document.createTextNode("Halo ini dari js"));
// numberItem.appendChild(numberDiv);

const names = [
    "Hady Gs", 
    "Irki", 
    "Tegar",
    "Justine Tintin",  
    "Joshua"
];

//Same result with arrow function
const peopleItem = document.getElementById("people-item");

// names.forEach(name => {
//     console.log(name);
// });

// function printName(name){
//     console.log(name);
// }

// names.forEach(printName);

names.forEach(name =>{

    let spacePosition = name.indexOf(" ");

    if(spacePosition != -1){
        name = name.substring(0, spacePosition);
    }

    peopleItem.innerHTML += `<div> ${name} </div>`;
})

const dateValue = document.getElementById("date-value");

let date = new Date();

dateValue.textContent = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

setInterval(() => {
    let date = new Date();
    dateValue.textContent = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);

dateValue.addEventListener("click", e => {
    console.log("Hello")
});

dateValue.addEventListener("mouseenter", e => {
    dateValue.style.color = "red";
})

dateValue.addEventListener("mouseleave", e => {
    dateValue.style.color = "white";
})

console.log(Math.random());
console.log(Math.round(0.994, 3));