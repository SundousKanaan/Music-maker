// const { log } = require("tone/build/esm/core/util/Debug")

let pianoList = document.querySelector("main > ul")
let plusButton = document.querySelector("main > button")


plusButton.addEventListener("click", () => {
    let liElement = document.createElement("li")
    liElement.innerHTML = `
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

    pianoButtons = document.querySelectorAll("main ul li > div button")
    deleteButtons = document.querySelectorAll("main ul li > button")

    console.log(deleteButtons.length);

    addTones();
})



// ********************************************
// ********************************************
const synth = new Tone.Synth().toDestination();

let playButton = document.querySelector("main > section:first-of-type button:first-of-type")
let refreshButton = document.querySelector("main > section:first-of-type button:last-of-type")
let deleteButtons = document.querySelectorAll("main ul li > button")

let tonesList = document.querySelector("header ul")
let tones = document.querySelectorAll("header ul li")
let pianoButtons = document.querySelectorAll("main ul li > div button")

playButton.addEventListener("click", () => {
    playButton.classList.add("play");
    console.log("tone play");
    // tonesList.classList.toggle("playTone");

    audioCheck();
})

async function audioCheck() {
    for (let i = 0; i < pianoButtons.length; i++) {
        if (pianoButtons[0].classList.contains('active')) {
            console.log("true");
            // synth.triggerAttackRelease('C4', '8n');
            // await Tone.start();
            Tone.Transport.start()
        } else if (pianoButtons[1].classList.contains('active')) {
            Tone.Transport.start()
        }
        else {
            console.log("error");
        }

    }
}


refreshButton.addEventListener("click", () => {
    playButton.classList.remove("play");
    tonesList.classList.remove("playTone");

    for (let i = 0; i < pianoButtons.length; i++) {
        pianoButtons[i].classList.remove("active");
        tones[i].classList.remove("tone");
    }
})

function addTones(){
for (let i = 0; i < pianoButtons.length; i++) {
    pianoButtons[i].addEventListener("click", () => {
        pianoButtons[i].classList.toggle("active");
        console.log("tone", [i]);

        for (let i = 0; i < pianoButtons.length; i++) {
            if (pianoButtons[i].classList.contains('active')) {
                playButton.classList.add("activePlay");
                console.log("playyyy", playButton);
                break;
            } else {
                playButton.classList.remove("activePlay");
            }
        }

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

        if (pianoButtons[i] == pianoButtons[0]) {
            //   synth.triggerAttackRelease('C4', '8n');
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("C2", "8n", time);
            }, "2n").start(0);
            console.log("yeees");
        } else if (pianoButtons[i] == pianoButtons[1]) {
            //   synth.triggerAttackRelease('D4', '8n');

            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("D4", "8n", time);
            }, "2n").start(0);
        } else if (pianoButtons[i] == pianoButtons[2]) {
            synth.triggerAttackRelease('E4', '8n');
        } else if (pianoButtons[i] == pianoButtons[3]) {
            synth.triggerAttackRelease('F4', '8n');
        } else if (pianoButtons[i] == pianoButtons[4]) {
            synth.triggerAttackRelease('G4', '8n');
        } else if (pianoButtons[i] == pianoButtons[5]) {
            synth.triggerAttackRelease('A4', '8n');
        } else if (pianoButtons[i] == pianoButtons[6]) {
            synth.triggerAttackRelease('B4', '8n');
        } else if (pianoButtons[i] == pianoButtons[7]) {
            synth.triggerAttackRelease('C5', '8n');
        } else if (pianoButtons[i] == pianoButtons[8]) {
            synth.triggerAttackRelease('D5', '8n');
        }
    })
}
}

addTones();

function deletePiano() {
    console.log("delete");
    for (let i = 0; i < deleteButtons.length; i++) {
        console.log("delete");
        deleteButtons[i].parentNode.remove();
        console.log(deleteButtons.length);
    }
}


for (let i = 0; i < deleteButtons.length; i++) {
deleteButtons[i].addEventListener("click", deletePiano);
}