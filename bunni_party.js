// starting position
let x = 0;
let  y = 0;

// direction
let  dirX = 0;
let  dirY = 0;

let speed = 0;

// make them random
for (let bunni of document.getElementsByClassName("bunniDance")) {

    // starting position
    let x = Math.floor(Math.random() * 500);
    let y = Math.floor(Math.random() * 500);

    // direction
    let dirX = Math.floor(Math.random() * 5) + 1;
    let dirY = Math.floor(Math.random() * 5) + 1;

    const speed = Math.floor(Math.random() * 2) + 1;

    // get bunni and screen size
    const bunniWidth = bunni.clientWidth;
    const bunniHeight = bunni.clientHeight;
    
    function animate() {

        const screenHeight = document.body.clientHeight;
        const screenWidth = document.body.clientWidth;

        if (y + bunniHeight >= screenHeight || y < 0) {
            dirY *= -1;
        }

        if (x + bunniWidth >= screenWidth || x < 0) {
            dirX *= -1;
        }

        x += dirX * speed;
        y += dirY * speed;

        bunni.style.left = x + "px";
        bunni.style.top = y + "px";

        window.requestAnimationFrame(animate);
    }

    window.requestAnimationFrame(animate);
}
