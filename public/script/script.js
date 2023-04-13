
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

let tonesList = document.querySelector("header ul")
let tones = document.querySelectorAll("header ul li")
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
        //     break;
        // }
        if (pianoButtons[0].classList.contains('active')) {
            console.log("true");
            Tone.Transport.start()
            // break;
        }
        else if (pianoButtons[1].classList.contains('active')) {
            console.log("true");
            Tone.Transport.start()
            // break;
        }
        else if (pianoButtons[2].classList.contains('active')) {
            console.log("true");
            Tone.Transport.start()
            // break;
        }
        else if (pianoButtons[3].classList.contains('active')) {
            console.log("true");
            Tone.Transport.start()
            // break;
        }
        else {
            console.log("not selected");
            Tone.Transport.stop()
        }
    }
}

for (let i = 0; i < pianoButtons.length; i++) {
    pianoButtons[i].addEventListener("click", () => {
        if (i < 19) {
            pianoButtons[i].classList.toggle("active");
            console.log("tone", [i]);
            console.log(i);
        }

        for (let i = 0; i < pianoButtons.length; i++) {
            if (pianoButtons[i].classList.contains('active')) {
                pauseButton.classList.add("activePlay");
                break;
            } else {
                pauseButton.classList.remove("activePlay");
                // Tone.Transport.stop()
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

        if (pianoButtons[i] == pianoButtons[0]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("C2", "8n", time);
            }, "2n").start(0);

        } else if (pianoButtons[i] == pianoButtons[1]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("D4", "8n", time);
            }, "2n").start(0);

        } else if (pianoButtons[i] == pianoButtons[2]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("E4", "8n", time);
            }, "2n").start(0);

        } else if (pianoButtons[i] == pianoButtons[3]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("F4", "8n", time);
            }, "2n").start(0);

        } else if (pianoButtons[i] == pianoButtons[4]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("G4", "8n", time);
            }, "2n").start(0);

        } else if (pianoButtons[i] == pianoButtons[5]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("D4", "8n", time);
            }, "2n").start(0);

        } else if (pianoButtons[i] == pianoButtons[6]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("B4", "8n", time);
            }, "2n").start(0);

        } else if (pianoButtons[i] == pianoButtons[7]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("C5", "8n", time);
            }, "2n").start(0);

        } else if (pianoButtons[i] == pianoButtons[8]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("D5", "8n", time);
            }, "2n").start(0);

        } else if (pianoButtons[i] == pianoButtons[9]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("C5", "8n", time);
            }, "4n").start(0);

        } else if (pianoButtons[i] == pianoButtons[10]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("D4", "8n", time);
            }, "4n").start(0);
        } else if (pianoButtons[i] == pianoButtons[11]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("E4", "8n", time);
            }, "4n").start(0);
        } else if (pianoButtons[i] == pianoButtons[13]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("F4", "8n", time);
            }, "4n").start(0);
        } else if (pianoButtons[i] == pianoButtons[14]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("G#4", "8n", time);
            }, "4n").start(0);
        } else if (pianoButtons[i] == pianoButtons[15]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("D#2", "8n", time);
            }, "2n").start(0);
        } else if (pianoButtons[i] == pianoButtons[17]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("B4", "8n", time);
            }, "4n").start(0);

        } else if (pianoButtons[i] == pianoButtons[18]) {
            const synthA = new Tone.FMSynth().toDestination();

            const loopA = new Tone.Loop(time => {
                synthA.triggerAttackRelease("C#5", "8n", time);
            }, "2n").start(0);

        }





        if (pianoButtons[i] == pianoButtons[19]) {
            synth.triggerAttackRelease('C4', '8n');

        } else if (pianoButtons[i] == pianoButtons[20]) {

            synth.triggerAttackRelease('D4', '8n');


        } else if (pianoButtons[i] == pianoButtons[21]) {
            synth.triggerAttackRelease('E4', '8n');

        } else if (pianoButtons[i] == pianoButtons[22]) {
            synth.triggerAttackRelease('F4', '8n');

        } else if (pianoButtons[i] == pianoButtons[23]) {
            synth.triggerAttackRelease('G4', '8n');

        } else if (pianoButtons[i] == pianoButtons[24]) {
            synth.triggerAttackRelease('D4', '8n');

        } else if (pianoButtons[i] == pianoButtons[25]) {
            synth.triggerAttackRelease('B4', '8n');

        } else if (pianoButtons[i] == pianoButtons[26]) {
            synth.triggerAttackRelease('C5', '8n');

        } else if (pianoButtons[i] == pianoButtons[27]) {
            synth.triggerAttackRelease('D4', '8n');

        } else if (pianoButtons[i] == pianoButtons[28]) {
            synth.triggerAttackRelease('C5', '8n');

        } else if (pianoButtons[i] == pianoButtons[29]) {
            synth.triggerAttackRelease('D4', '8n');

        } else if (pianoButtons[i] == pianoButtons[30]) {
            synth.triggerAttackRelease('E4', '8n');

        } else if (pianoButtons[i] == pianoButtons[32]) {
            synth.triggerAttackRelease('F4', '8n');

        } else if (pianoButtons[i] == pianoButtons[33]) {
            synth.triggerAttackRelease('G#4', '8n');

        } else if (pianoButtons[i] == pianoButtons[34]) {
            synth.triggerAttackRelease('D#4', '8n');

        } else if (pianoButtons[i] == pianoButtons[36]) {
            synth.triggerAttackRelease('B4', '8n');


        } else if (pianoButtons[i] == pianoButtons[37]) {
            synth.triggerAttackRelease('C#5', '8n');


        }



        // if (pauseButton.classList.contains("activePlay")) {
        //     audioCheck();
        // }

        audioCheck();
    })
}

