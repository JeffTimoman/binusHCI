let contentBackground = document.getElementById("content");
let contentCounter = 0;

setInterval(() => {
    if(contentCounter == 0){
        contentBackground.style.backgroundImage = "url(../../assets/img/characters/sumeru/night-background.jpg)"
        contentCounter = 1;
        contentBackground.style.transition = "background-image ease-in 4s";
    }else if(contentCounter == 1){
        contentBackground.style.backgroundImage = "url(../../assets/img/characters/sumeru/day-background.jpg)"
        contentCounter = 0;
        contentBackground.style.transition = "background-image ease-in 4s";
    }
}, 12000);

let charOptions = document.querySelectorAll(".charOption");
let sliderBorders = document.querySelectorAll(".sliderBorder");
let charName = document.getElementById("charName");
let charVision = document.getElementById("charVision");
let charNameList = ["TIGHNARI", "NAHIDA", "ALHAITAM", "WANDERER"]


let charDescList = ['An Avidya Forest Watcher and botanical scholar who graduated from Amurta. He leads a fruitful life of patrolling the rainforest, protecting the ecology, and lecturing fools every day.','Lesser Lord Kusanali dwells deep in the Sanctuary of Surasthana, and has never really been in the limelight, nor has she even been mentioned much.','The current scribe of the Sumeru Akademiya, a man endowed with extraordinary intelligence and talent. Just a goodloking man with muscle.','If the measure of humanity is having a heart, then he cannot be deemed as such.If one without a heart experiences joy and sorrow, then he shall be a puppet most alike to humanity.']

let charDesc = document.getElementById("charDesc")
let charBigImg = document.getElementById("charBigImg");

for(let i = 0; i < charOptions.length; i++){
    charOptions[i].addEventListener("click", () => {
        for(let j = 0; j < charOptions.length; j++){
            sliderBorders[j].src = "../../assets/img/characters/slider-inactive.png"
            charOptions[j].classList.remove("p-active");
        }
        charOptions[i].classList.add("p-active");
        sliderBorders[i].src = "../../assets/img/characters/slider-active.png"
        charBigImg.src = `../../assets/img/characters/sumeru/big-${i+1}.png`
        charVision.src = `../../assets/img/characters/sumeru/vision-${i+1}.png`
        charDesc.innerHTML = charDescList[i]
        charName.innerHTML = charNameList[i]
        charName.style.animation = "fadeIn 1s";
        charVision.style.animation = "fadeIn 1s";
        charBigImg.style.animation = "fadeIn 1s";
        charDesc.style.animation = "fadeIn 1s";
        setTimeout(() => {
            charName.style.animation = "";
            charVision.style.animation = "";
            charBigImg.style.animation = "";
            charDesc.style.animation = "";
        }, 1000);

        // windows scroll to top make the scroll smooth
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
}

for(let i = 0; i < charOptions.length; i++){
    charOptions[i].addEventListener("mouseover", () => {
        sliderBorders[i].src = "../../assets/img/characters/slider-active.png"
    })
    charOptions[i].addEventListener("mouseout", () => {
        if(!charOptions[i].classList.contains("p-active")){
            sliderBorders[i].src = "../../assets/img/characters/slider-inactive.png"
        }
    })
}