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



// if button is pressed then user wants to authenticte,
// so dont want to skip authentication node...
function AuthenticationButtonPressed(){

    // since it looks if username string not null on page load, make username null :p
    //username =;
    // yes there is a better way to do this but its simple and im eepy ;3
    // It may have ben simple but it broke everything else... Left it because I'm still eepy. TwT

    // this should work. :p
    localStorage.removeItem("username");
}

function isEven(num){
    if (num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}