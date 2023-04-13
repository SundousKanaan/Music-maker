
// let pianoList = document.querySelector("main > ul:first-of-type")
let plusButton = document.querySelector("main > button:first-of-type")
let deleteButton = document.querySelector("main ul li:nth-child(2) > button")


plusButton.addEventListener("click", () => {
    deleteButton.parentNode.classList.add("addPiano");
    plusButton.classList.add("hidden")
})

deleteButton.addEventListener("click", () => {
    deleteButton.parentNode.classList.remove("addPiano")
    plusButton.classList.remove("hidden")
})

let modeButton = document.querySelector("main > button:last-of-type")
modeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    console.log("ddd");
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

    location.reload();
})


async function audioCheck() {
    for (let i = 0; i < pianoButtons.length; i++) {
        if (pianoButtons[i].classList.contains('active')) {
            console.log( i,"true");
            Tone.Transport.start()
            break;
        } else {
            console.log("not selected");
            Tone.Transport.stop()
        }
    }

    if (playButton.classList.contains('activePlay')) {
        Tone.Transport.start()
        playButton.classList.remove('activePlay');

        for (let i = 0; i < tones.length; i++) {
            if (tones[i].classList.contains('pause')) {
                tones[i].classList.remove("pause");
                tones[i].classList.add("tone");
            }
        }
    }
}

let array = [
    "C6","D4","E4","F4","G4","A4","B4","C5","Db4","Db4",
    "C#4","D#2","D#2","Eb4","F#4","Gb4","Gb4","Ab4","Bb6",

    "C6","D4","E4","F4","G4","A4","B4","C5","Db4","Db4",
    "C#4","D#2","D#2","Eb4","F#4","Gb4","Gb4","Ab4","Bb6"
]

for (let i = 0; i < pianoButtons.length; i++){
    pianoButtons[i].innerHTML= array[i];
}

console.log(array.length , "array.length" , pianoButtons.length);

for (let i = 0; i < pianoButtons.length; i++) {
    pianoButtons[i].addEventListener("click", () => {
        console.log([i] , "piano button" , array[i]);
        if (i < 19) {
            pianoButtons[i].classList.toggle("active");
            if (pianoButtons[i].classList.contains('active')) {
                const synthA = new Tone.AMSynth().toDestination();

                const loopA = new Tone.Loop(time => {
                    synthA.triggerAttackRelease(array[i], "8n", time);
                }, "3n").start(0);

                pianoButtons[i].synth = synthA;
                pianoButtons[i].loop = loopA;
                
                if (!pauseButton.classList.contains('activePlay')) {
                    pauseButton.classList.add('activePlay')
                    // Tone.Transport.start()
                }

            } else {
                pianoButtons[i].synth.triggerRelease();
                pianoButtons[i].loop.cancel();
            }
        } else if (i > 18 && i < pianoButtons.length) {
                synth.triggerAttackRelease(array[i], '8n');
            }

        if (pianoButtons[i] == pianoButtons[1]) {
            tones[1].classList.toggle("tone");
            tones[12].classList.toggle("tone");

        }
        else if (pianoButtons[i] == pianoButtons[5]) {
            tones[5].classList.toggle("tone");
            tones[16].classList.toggle("tone");

        }
        else if (pianoButtons[i] == pianoButtons[20]) {
            tones[20].classList.toggle("tone");
            tones[30].classList.toggle("tone");
        }
        else if (pianoButtons[i] == pianoButtons[24]) {
            tones[24].classList.toggle("tone");
            tones[34].classList.toggle("tone");
        }
        else {
            tones[i].classList.toggle("tone");

        }

        audioCheck();
    })
}




const noContext = document.querySelector("body");

noContext.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});