let playButton = document.querySelector("main > section:first-of-type button:first-of-type")

let refreshButton = document.querySelector("main > section:first-of-type button:last-of-type")

let tonesList = document.querySelector("header ul")
let tones = document.querySelectorAll("header ul li")
let pianoButtons = document.querySelectorAll("main ul li > div button")

let plusButton = document.querySelector("main > button")
let pianoList = document.querySelector("main > ul")

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
        else {
            tones[i].classList.toggle("tone");
        }
    })
}

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


let deleteButtons = document.querySelectorAll("main ul li > button")

for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", () => {
        console.log("delete");
        deleteButtons[i].parentNode.remove();
    })
}