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


// clicks on each "IP adress"
let showArchiClicks = 0;
let showElefteriaClicks = 0;
let showPuppyPawsClicks = 0;
let showTotalClicks = 0;

function isEven(num){
    if (num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}


// show and hide Archi
function showArchi(){
    showArchiClicks++
    showTotalClicks++
    if(isEven(showArchiClicks)){
        document.getElementById("archi").style.display = "none";
    }
    else{
        document.getElementById("archi").style.display = "inline";
    }

    // Easter Egg
    console.log(`Archi clicks:${showArchiClicks}. Total clicks:${showTotalClicks}`);
}

// show and hide elefteria
function showElefteria(){
    showElefteriaClicks++
    showTotalClicks++
    if(isEven(showElefteriaClicks)){
        document.getElementById("elefteria").style.display = "none";
    }
    else{
        document.getElementById("elefteria").style.display = "inline";
    }

    // Easter Egg
    console.log(`Elefteria clicks:${showElefteriaClicks}. Total clicks:${showTotalClicks}`);
}

// show and hide Archi
function showPuppyPaws(){
    showPuppyPawsClicks++
    showTotalClicks++
    if(isEven(showPuppyPawsClicks)){
        document.getElementById("puppyPaws").style.display = "none";
    }
    else{
        document.getElementById("puppyPaws").style.display = "inline";
    }

    // Easter Egg
    console.log(`PuppyPaws clicks:${showPuppyPawsClicks}. Total clicks:${showTotalClicks}`);
}