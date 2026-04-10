// get username
function getUsername(){
    const username = localStorage.getItem("username");

    if(!username == ""){
        // Place username across page
        for (let element of document.getElementsByClassName("username")) {
            element.textContent = username;
        }
    }
}

let pageShown = 0;

function showRedCarInfo(){

    // hide other info page if shown
    if(pageShown == 2){
        document.getElementById("comingSoonInfo").style.display = "none";
    }

    // show and hide info page on click
    if(document.getElementById("redCarInfo").style.display = "none"){
        document.getElementById("redCarInfo").style.display = "block";
        pageShown = 1;
    }
    else{
        document.getElementById("redCarInfo").style.display = "none";
        pageShown = 0;
    }
}

function showComingSoonInfo(){

    // hide other info page if shown
    if(pageShown == 1){
        document.getElementById("redCarInfo").style.display = "none";
    }

    // show and hide info page on click
    if(document.getElementById("comingSoonInfo").style.display = "none"){
        document.getElementById("comingSoonInfo").style.display = "block";
        pageShown = 2;
    }
    else{
        document.getElementById("comingSoonInfo").style.display = "none";
        pageShown = 0;
    }
}

// change image on hover/click
let redCarInternalImage = document.getElementById("redCarInternalImage");
let redCarEngineTransContainer = document.getElementById("redCarEngineTransContainer");
let redCarSusContainer = document.getElementById("redCarSusContainer");
let redCarWheelBrakeContainer = document.getElementById("redCarWheelBrakeContainer");

redCarEngineTransContainer.addEventListener('mouseover', function() {
    redCarInternalImage.src = "img/golfInternalTDI⁄trans.jpg";
});

redCarEngineTransContainer.addEventListener('mouseout', function() {
    redCarInternalImage.src = "img/golfInternal.jpg";
});

redCarSusContainer.addEventListener('mouseover', function() {
    redCarInternalImage.src = "img/golfInternalSus.jpg";
});

redCarSusContainer.addEventListener('mouseout', function() {
    redCarInternalImage.src = "img/golfInternal.jpg";
});

redCarWheelBrakeContainer.addEventListener('mouseover', function() {
    redCarInternalImage.src = "img/golfInternalWheels⁄Brakes.jpg";
});

redCarWheelBrakeContainer.addEventListener('mouseout', function() {
    redCarInternalImage.src = "img/golfInternalSus.jpg";
});