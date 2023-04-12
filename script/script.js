let pianoList = document.querySelector("main > ul")
let plusButton = document.querySelector("main > button")


plusButton.addEventListener("click", () => {
    let liElement = document.createElement("li")
    liElement.innerHTML=`
        <p>piano</p>
        <button></button>
        <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>

            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>10</button>
        </div>

        <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>

            <button>4</button>
            <button>5</button>
            <button>6</button>

            <button>7</button>
            <button>8</button>
            <button>9</button>
        </div>
    `

    pianoList.appendChild(liElement);

    console.log("new piano");
})



let playButton = document.querySelector("main > section:first-of-type button:first-of-type")
let refreshButton = document.querySelector("main > section:first-of-type button:last-of-type")
let deleteButtons = document.querySelectorAll("main ul li > button")

let tonesList = document.querySelector("header ul")
let tones = document.querySelectorAll("header ul li")
let pianoButtons = document.querySelectorAll("main ul li > div button")


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
        tones[i].classList.remove("tone");
    }
})


for (let i = 0; i < pianoButtons.length; i++) {
    pianoButtons[i].addEventListener("click", () => {
        pianoButtons[i].classList.toggle("active");
        console.log("tone", [i]);

        if (pianoButtons[i] == pianoButtons[1]) {
            tones[1].classList.toggle("tone");
            tones[12].classList.toggle("tone");

        }
        else if (pianoButtons[i] == pianoButtons[5]) {
            tones[5].classList.toggle("tone");
            tones[16].classList.toggle("tone");

        }
        else {
            tones[i].classList.toggle("tone");
        }
    })
}

for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", () => {
        console.log("delete");
        deleteButtons[i].parentNode.remove();
    })
}