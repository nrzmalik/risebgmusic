function createCircleButton() {
    var BGsound = document.getElementById("BGmusic");
const buttonContainer = document.querySelector(".lesson-one-page-slides__controls");

const button = document.createElement("button");
button.setAttribute("id", "muteButton");
button.setAttribute("class", "circle-button");
button.classList.add(
    "lesson-one-page-slides__next-btn",
    "lesson-one-page-slides__prev-btn",
    "lesson-one-page-slides__restart-btn"
);


const svgNS = "http://www.w3.org/2000/svg";

const normalIcon = document.createElementNS(svgNS, "svg");
normalIcon.setAttribute("class", "lesson-one-page-slides__arrow-icon");
normalIcon.setAttribute("width", "22");
normalIcon.setAttribute("height", "22");
normalIcon.setAttribute("fill", "currentColor");
normalIcon.setAttribute("class", "bi bi-volume-up-fill");
normalIcon.setAttribute("viewBox", "0 0 22 22");

const normalPath = document.createElementNS(svgNS, "path");
normalPath.setAttribute("d", "M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z");
normalIcon.appendChild(normalPath);

const normalPath2 = document.createElementNS(svgNS, "path");
normalPath2.setAttribute("d", "M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z");
normalIcon.appendChild(normalPath2);

const normalPath3 = document.createElementNS(svgNS, "path");
normalPath3.setAttribute("d", "M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z");
normalIcon.appendChild(normalPath3);

const clickedIcon = document.createElementNS(svgNS, "svg");
clickedIcon.setAttribute("class", "lesson-one-page-slides__arrow-icon");
clickedIcon.setAttribute("width", "22");
clickedIcon.setAttribute("height", "22");
clickedIcon.setAttribute("fill", "currentColor");
clickedIcon.setAttribute("class", "bi bi-volume-mute-fill");
clickedIcon.setAttribute("viewBox", "0 0 22 22");

const clickedPath = document.createElementNS(svgNS, "path");
clickedPath.setAttribute("d", "M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z");
clickedIcon.appendChild(clickedPath);

let isMuted = false;

    function toggleMute() {
        isMuted = !isMuted;
        if (isMuted) {
            button.innerHTML = "";
            button.appendChild(clickedIcon);
            mute();
        } else {
            button.innerHTML = "";
            button.appendChild(normalIcon);
            unmute();
        }
    }

    function mute() {
        
        BGsound.volume = 0;
    }

    function unmute() {
        
        BGsound.volume = 1;
        BGsound.play();
        BGsound.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }

    button.addEventListener("click", toggleMute);
    button.appendChild(normalIcon);
    buttonContainer.appendChild(button);
    unmute();
	
}
function checkForTargetElement() {
    const targetElement = document.querySelector('.lesson-one-page-slides__controls');
   
    const buttonExists = document.querySelector('.circle-button');

    if (targetElement && !buttonExists) {
        createCircleButton();
    }
}

const observer = new MutationObserver(() => {
    checkForTargetElement();
});

observer.observe(document.body, { childList: true, subtree: true });

checkForTargetElement();




