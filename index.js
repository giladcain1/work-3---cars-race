window.addEventListener("load", function () {
    var raceAudio = new Audio("./WORK3/sounds/race-start-beeps-125125.mp3");
    raceAudio.volume = 0.9;
    raceAudio.play();
});

// Creating an array of all buttons
var buttons = document.querySelectorAll(".carss");

// Adding event listener to the mouse click
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Adding event listener to the keyboard press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

var currentAudio; // Variable to store the currently playing audio

function makeSound(key) {

    // Pause the currently playing audio (if any)
    if (currentAudio) {
        currentAudio.pause();
    }

    switch (key) {
     
        case 'a':
            currentAudio = new Audio("./carssounds/f1.mp3");
            break;
        case 's':
            currentAudio = new Audio("./carssounds/speedy.mp3");
            break;
            case 'w':
            currentAudio = new Audio("./carssounds/racestart.mp3");
                break;
        case 'j':
            currentAudio = new Audio("./carssounds/truck.mp3");
            break;
            case 'k':
             currentAudio = new Audio("./carssounds/firetruck.mp3");
          break;
        case 'c':
            currentAudio = new Audio("./carssounds/carengine.mp3");
            break;
            case 'd':
            currentAudio = new Audio("./carssounds/motorcycle.mp3");
            break;
        default:
            alert("Your car's engine doesn't start");
            return; // Exit the function if the key is not recognized
    }

    // Check if the audio element is defined before playing
    if (currentAudio) {
        currentAudio.play();
    }
}

// Button animation function
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 150);
}
