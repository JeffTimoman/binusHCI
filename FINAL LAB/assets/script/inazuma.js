let contentBackground = document.getElementById("content");
let contentCounter = 0;

setInterval(() => {
    if(contentCounter == 0){
        contentBackground.style.backgroundImage = "url(../../assets/img/characters/inazuma/night-background.jpg)"
        contentCounter = 1;
        contentBackground.style.transition = "background-image ease-in 4s";
    }else if(contentCounter == 1){
        contentBackground.style.backgroundImage = "url(../../assets/img/characters/inazuma/day-background.jpg)"
        contentCounter = 0;
        contentBackground.style.transition = "background-image ease-in 4s";
    }
}, 12000);

let charOptions = document.querySelectorAll(".charOption");
let sliderBorders = document.querySelectorAll(".sliderBorder");
let charName = document.getElementById("charName");
let charVision = document.getElementById("charVision");
let charNameList = ["EI", "YAE MIKO", "AYAKA", "KAZUHA"]


let charDescList = ['The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate. With the might of lightning at her disposal, she commits  herself to the solitary pursuit of eternity.', "The head shrine maiden in charge of Grand Narukami Shrine and a descendant of Kitsune lineage, Eternity's servant and friend, and the intimidating editor-in-chief of Yae Publishing House, a publisher of light novels...", "Daughter of the Yashiro Commission's Kamisato Clan from Inazuma. Dignified and elegant, wise and determined. Sincere and pleasant to others. Universally loved by the Inazuma people, she has earned the title of Shirasagi Himegimi.", "A wandering samurai from Inazuma with a modest and gentle personality.Beneath a youthful and carefree demeanor lies a heart that hides a great many burdens from the past. Seemingly easygoing, Kazuha has his own code of conduct.."]

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
        charBigImg.src = `../../assets/img/characters/inazuma/big-${i+1}.png`
        charVision.src = `../../assets/img/characters/inazuma/vision-${i+1}.png`
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