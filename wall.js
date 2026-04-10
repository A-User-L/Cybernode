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


let clickToExplode = document.getElementById("clickToExplode");
let ExplosionGif = document.getElementById("ExplosionGif");
console.log("test");

/*

Doesn't work RN... TwT

function ClickToExplode() {
    console.log("test");
    ExplosionGif.style.display = "block";
}  
*/
