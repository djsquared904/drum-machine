function play(str) {
    let displayField = document.getElementById('display');

    if (str === "q" || str === "Q") {
        displayField.innerHTML = "Clap";
    } else if (str === "w" || str === "W") {
        displayField.innerHTML = "Closed Hi Hat";
    } else if (str === "e" || str === "E") {
        displayField.innerHTML = "Crash Symbol";
    } else if (str === "a" || str === "A") {
        displayField.innerHTML = "Cowbell";
    } else if (str === "s" || str === "S") {
        displayField.innerHTML = "Hi Conga";
    } else if (str === "d" || str === "D") {
        displayField.innerHTML = "Other Low Conga";
    } else if (str === "z" || str === "Z") {
        displayField.innerHTML = "Shaker";
    } else if (str === "x" || str === "X") {
        displayField.innerHTML = "Snare";
    } else if (str === "c" || str === "C") {
        displayField.innerHTML = "Kick (The 808)";
    }

    let audio = document.getElementById(str);
    audio.play();
}

window.document.onkeyup = function (event) {
    let keystroke = event.key
    if (keystroke === "q" || keystroke === "Q") {
        play("Q");
    } else if (keystroke === "w" || keystroke === "W") {
        play("W");
    } else if (keystroke === "e" || keystroke === "E") {
        play("E");
    } else if (keystroke === "a" || keystroke === "A") {
        play("A");
    } else if (keystroke === "s" || keystroke === "S") {
        play("S");
    } else if (keystroke === "d" || keystroke === "D") {
        play("D");
    } else if (keystroke === "z" || keystroke === "Z") {
        play("Z");
    } else if (keystroke === "x" || keystroke === "X") {
        play("X");
    } else if (keystroke === "c" || keystroke === "C") {
        play("C");
    }
}