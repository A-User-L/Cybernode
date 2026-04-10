// welcome page

var username = "";
let password = "";

function WelcomeUser(){

    // Get Username and password
    username = document.getElementById("userName").value;
    password = document.getElementById("passWord").value;

    // get boot pass or fail
    let passOrFailUser = document.getElementById("pOrFUser");
    let passOrFailPass = document.getElementById("pOrFPass");

     // making sure username and password can work
     if(username === "" || username === " "){
        document.getElementsByClassName("enterResult").textContent = "You must unter a valid username.";

    // not needed but IMMERSION
     }else if(password === "" || password === " "){
        document.getElementsByClassName("enterResult").textContent = "You must unter a valid password.";
                // change from failed to ok
                passOrFailUser.style.color = "#00d400";
                passOrFailUser.textContent = `  OK  `;
     }else{
        // save username
        localStorage.setItem("username", username);

        // change from failed to ok
        // user
        passOrFailUser.style.color = "#00d400";
        passOrFailUser.style.textShadow =  "0px 0px 15px #00ff00"; 
        passOrFailUser.textContent = `  OK  `;

        // pass
        passOrFailPass.style.color = "#00d400";
        passOrFailPass.style.textShadow = "0px 0px 15px #00ff00"; 
        passOrFailPass.textContent = `  OK  `;

        // result
        document.getElementsByClassName("enterResult").textContent = `Welcome ${username} !`;
        document.getElementById("enterWebsite").style.display = "inline";

        // show more boot loader stuff
        document.getElementById("fakeBoot").style.display = "inline";
    }
}

// skip authentication node if USER already has a Username.
function UsernameCheck(){
    if(!localStorage.getItem("username") == ""){
        window.location.replace("home_node.html");
    }
}