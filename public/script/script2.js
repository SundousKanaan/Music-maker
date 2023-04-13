
// let pianoList = document.querySelector("main > ul:first-of-type")
let plusButton = document.querySelector("main > button")
let deleteButton = document.querySelector("main ul li:nth-child(2) > button")


plusButton.addEventListener("click", () => {
    deleteButton.parentNode.classList.add("addPiano");
    plusButton.classList.add("hidden")
})

deleteButton.addEventListener("click", () => {
    deleteButton.parentNode.classList.remove("addPiano")
    plusButton.classList.remove("hidden")
})

// ********************************************
// ********************************************
const synth = new Tone.Synth().toDestination();

let playButton = document.querySelector("main > section:first-of-type button:first-of-type")
let pauseButton = document.querySelector("main > section:first-of-type button:nth-of-type(2)")
let refreshButton = document.querySelector("main > section:first-of-type button:last-of-type")

let tonesList = document.querySelector("header ul:first-of-type , header ul:nth-of-type(2) ")
let tones = document.querySelectorAll("header ul:first-of-type li, header ul:nth-of-type(2) li")
let pianoButtons = document.querySelectorAll("main ul li > div button")

playButton.addEventListener("click", () => {
    pauseButton.classList.add("activePlay");
    playButton.classList.remove("activePlay")

    console.log("tone play");

    for (let i = 0; i < tones.length; i++) {
        if (tones[i].classList.contains('pause')) {
            tones[i].classList.remove("pause");
            tones[i].classList.add("tone");
        }
    }

    audioCheck();
})

pauseButton.addEventListener("click", () => {
    console.log("tone stop");
    playButton.classList.add("activePlay")
    pauseButton.classList.remove("activePlay")

    for (let i = 0; i < tones.length; i++) {
        if (tones[i].classList.contains('tone')) {
            tones[i].classList.add("pause");
            tones[i].classList.remove("tone");
        }
    }

    Tone.Transport.stop()
})

refreshButton.addEventListener("click", () => {
    playButton.classList.remove("activePlay");
    pauseButton.classList.remove("activePlay");

    for (let i = 0; i < pianoButtons.length; i++) {
        pianoButtons[i].classList.remove("active");
        tones[i].classList.remove("tone");
    }

    Tone.Transport.stop()
})

async function audioCheck() {
    for (let i = 0; i < pianoButtons.length; i++) {
        // if (pianoButtons[i].classList.contains('active')) {
        //     console.log("true");
        //     Tone.Transport.start()
        //     // break;
        // }
        if (pianoButtons[0].classList.contains('active')) {
            console.log("true");
            Tone.Transport.start()
        }
        else if (pianoButtons[1].classList.contains('active')) {
            console.log("true");
            Tone.Transport.start()
        }
        else if (pianoButtons[2].classList.contains('active')) {
            console.log("true");
            Tone.Transport.start()
        }
        else if (pianoButtons[3].classList.contains('active')) {
            console.log("true");
            Tone.Transport.start()
        }
        else {
            console.log("not selected");
            Tone.Transport.stop()
        }
    }
}

let array = ["C2", "D4", "E4" , "F4"]

for (let i = 0; i < 4; i++) {
    pianoButtons[i].addEventListener("click", () => {
        if (i < 4) {
            pianoButtons[i].classList.toggle("active");
            console.log("tone", [i]);
            console.log(i);
        }

        // if (pianoButtons[i] == pianoButtons[0]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease(array[i], "8n", time);
            }, "2n").start(0);
        // }

        
        if (!pianoButtons[i].classList.contains('active')) {
            // pauseButton.classList.remove("activePlay");
            // Tone.Transport.stop()
            console.log("HIIIII");

        }

        audioCheck();
    })
}




const noContext = document.querySelector("body");

noContext.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});