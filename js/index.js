import { showPredictions, showPosition } from "./search/search.js";

/* listener for user position button */
document.querySelector(".search__position").addEventListener("click", () => {
    showPosition();
});

/* do this in order for callback in index.html to work with webpack */
window.initService = initService;

/* initialize Places API */
export function initService() {
    console.log("Connecting to maps API...")
    console.log("...connected");
    document.querySelector(".search__input").addEventListener('input', function () { showPredictions(this.value) });
}

let count = 0;

/* stops the loading animation when every api call is settled */
export function countFetched() {
    count++;
    if (count == 4) {

        /* hide loader and show sections */
        document.querySelector(".city-name").style.display = "block";
        document.querySelector(".city-name-subtitle").style.display = "block";
        document.querySelector(".loader").classList.add("hide");
        document.querySelector(".loader-right").classList.add("hide");
        document.querySelector(".loader-left").classList.add("hide");
        document.querySelector(".current").style.display = "block";
        document.querySelector(".history").style.display = "block";
        document.querySelector(".news").style.display = "block";
        document.querySelector('.map').style.visibilty = "visible";
        document.querySelector('.map').style.position = "static";
        count = 0;
    }
}
