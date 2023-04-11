let pianoButtons = document.querySelectorAll("main ul li > div button")
let playButton = document.querySelector("main > section:first-of-type button:first-of-type")
let refreshButton = document.querySelector("main > section:first-of-type button:last-of-type")

let tonesList = document.querySelector("header ul")
let tones = document.querySelectorAll("header ul li")
console.log(tones);

playButton.addEventListener("click", () => {
    playButton.classList.toggle("play");
    console.log("play");
    tonesList.classList.toggle("playTone");
})


refreshButton.addEventListener("click", () => {
    playButton.classList.remove("play");
    tonesList.classList.remove("playTone");

    for (let i = 0; i < pianoButtons.length; i++) {
        pianoButtons[i].classList.remove("active");
    }
})


for (let i = 0; i < pianoButtons.length; i++) {
    pianoButtons[i].addEventListener("click", () => {
        pianoButtons[i].classList.toggle("active");
        console.log("yes", [i]);

        if (pianoButtons[i] == pianoButtons[11]) {
            console.log("11");
            tones[12].classList.toggle("tone");
        }
         else if (pianoButtons[i] == pianoButtons[15]) {
            console.log("15", tones[16]);
            tones[16].classList.toggle("tone");
        }
        else{
            tones[i].classList.toggle("tone");
        }
    })
}