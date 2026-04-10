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






















/*

STOP CHEATING >:3
If you really want too I cant stop you. I commend your willingness to break the rules... :3c
Here, have some ASCII dot matrix yuri for your trubles. :p


⠀⡠⠐⠒⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠲⢴⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠶⢤⣄⣀⣀⣀⠤⠤⠤⢖⣒⡒⣒⠲⡲⠤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠌⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⢀⣀⠤⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠈⠓⢤⣄⠀⠀⠀⣀⣤⣶⠿⠛⠉⠁⠀⡄⠐⡰⠌⡒⣌⠢⢍⡓⢧⣍⠳⢌⠫⣓⢦⣀⠀⠀⠀⠀⠀⠀⠀
⠰⠀⢀⢀⠀⠀⠀⢀⣠⠴⢲⡚⣭⢡⡒⣦⠲⢜⡒⣓⢒⣛⢛⣶⠦⣴⣀⠢⠄⡌⢛⡦⢚⣽⠟⠁⠀⠀⡠⠀⢁⠀⠉⠐⠨⠒⢀⠋⣌⠢⣀⣈⠷⣦⢝⡶⣩⢟⡿⣦⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣔⡻⣲⣻⢣⢟⡰⣏⡽⣰⢫⢎⡵⣊⠧⣎⡳⣜⡰⢾⣭⣟⡲⣤⡟⣰⣿⣷⡾⢃⣴⡟⢁⡎⢰⣈⢀⢩⠐⡱⡆⡍⣆⠳⣆⠳⠎⠹⣞⡼⣣⠿⣼⣳⢟⣦⡀⠀⠀
⠀⠀⠀⠀⣰⢋⣬⢳⡷⢥⣋⠮⡵⣊⠶⣥⢋⡞⣴⢩⠳⠬⠓⣐⢢⡱⢎⡽⢻⣯⣿⣿⣿⣿⣾⣿⣿⢣⢾⢁⡺⡇⡈⢦⡙⢤⣹⡜⡜⣷⠸⣯⣓⣞⡹⣾⢭⡟⣷⢯⡿⣽⣷⠀⠀
⠀⣀⡀⢠⢧⢫⢖⡿⣙⠮⡜⣣⠗⡼⢳⢬⢳⡙⢦⡙⠋⠭⡳⢎⢧⡙⣎⢼⡙⣾⣻⣿⣿⣿⣿⣿⣿⣿⣿⡇⡟⣧⣗⠤⣏⠦⠀⡇⢜⣹⡧⣝⣷⢮⡽⣞⣯⢾⡽⣯⢿⣳⢿⣳⡁
⠀⠀⣜⡹⢬⡣⢏⡴⢫⠜⡱⢃⠞⣱⢋⡎⢧⡹⣂⣀⠼⣱⡙⢮⡒⡽⣜⢦⡛⡴⢹⣿⣿⣿⣿⣹⣿⣿⣿⣧⡇⢹⣿⡰⡿⡆⠒⣣⠘⡜⣿⡼⣹⣿⣼⣳⣞⣯⢿⡽⣏⠃⠊⠡⢷
⢀⠎⣖⡹⢲⡍⢧⡟⡰⡉⠰⠁⠊⠔⣣⠺⢥⢳⡱⢎⡳⢣⠝⣶⣹⠜⡭⢷⢧⣙⠾⣜⣿⣿⡏⣿⣿⣿⡟⣿⣗⠈⣿⡷⣇⡇⠀⡏⠀⣜⢻⣿⣽⣿⣷⣳⣟⡾⣿⣽⣣⠄⠀⢀⢼
⡜⢘⡦⡹⡱⢎⣳⠬⣁⠆⠡⡈⢡⠈⣆⡛⣬⢳⣍⢎⡳⣍⣟⡔⣻⡻⣌⢏⣧⠹⡞⢿⣯⣿⡧⢽⣿⣿⠽⡿⣿⡤⠹⣿⣿⣷⡠⣷⣌⠾⣽⣿⣿⡿⣿⡷⣯⢿⣳⣯⣿⣾⣳⣭⣴
⡇⠀⠀⡍⠡⠓⠈⡗⠈⢀⡡⡐⣄⠳⣄⠫⣇⡻⣌⢮⡱⣎⢼⣧⡝⣷⡘⣮⠜⡇⢻⡝⣿⠿⠷⢈⢊⣉⣁⣀⣀⣀⣰⣿⠏⣿⣗⣿⡼⣹⣿⡿⡱⣳⡝⣿⣿⣿⢯⣿⣿⣿⣿⣿⣿
⠀⡖⢮⣱⢳⠱⠂⣿⢰⢣⠖⡵⣊⢗⡬⣓⡧⣓⢯⠞⡴⣏⠖⣯⢣⣛⡇⢹⣾⠃⢸⣯⡿⣇⠀⣺⣿⣶⣿⣟⠉⢉⣿⠃⣀⣿⣿⣿⣽⣿⣿⠃⡤⠤⠸⣸⣿⣿⣿⣿⣿⣿⣿⣿⣾
⣜⡹⡲⣥⢫⢄⡁⣹⡎⣧⢛⡴⢭⡚⡴⢣⡷⣉⠾⣏⡖⣿⡜⣺⡌⣧⡿⠋⢀⠀⠾⣟⠇⣸⡄⡉⡈⠳⢋⡤⣡⡾⠍⡲⡝⢸⣿⣿⣾⣿⡟⠀⡿⡠⠀⣰⣿⣿⣿⣿⣿⣿⣿⣟⣿
⣧⢳⠥⣗⣚⡦⢽⢩⢷⡭⢞⡬⢣⢽⣘⣿⠳⣍⠶⢻⣼⡟⡮⣿⣧⢻⠃⠀⣠⣶⣀⠳⣞⣑⡔⡑⣐⠋⣔⢮⠟⠁⠴⠊⠀⣼⣿⡟⢡⡿⠁⠈⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠁⣏⠾⣈⣷⢹⡎⢷⡎⣷⡉⢾⡉⡾⣿⢉⢷⣈⠏⡏⣿⠇⣿⢹⠀⠀⠀⣸⣿⠏⠁⠀⠀⠈⣹⠀⠆⠉⠈⠇⠀⠰⣀⣰⡾⣿⡏⣇⡿⠀⢶⣶⣿⠇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⢸⢼⣏⡷⡸⢯⣿⢢⢿⡜⣏⠧⣝⠲⣿⣊⣿⡮⣙⠞⣿⡀⠃⠉⠀⠴⠚⡉⠠⡐⡱⢶⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠋⠀⠈⢀⡴⢏⣾⣾⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⢸⢻⢽⣞⣯⢓⢿⣷⡎⣿⡞⣽⢌⣛⡏⠿⢾⡝⢯⡞⣹⡿⣦⡀⠒⠤⡓⠈⠑⠀⠁⠀⠀⢠⢷⠆⠀⠀⠀⠀⠀⠀⠐⠋⠀⠀⢀⡖⢍⠴⣋⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸
⠸⣟⡆⠌⣻⣿⣮⣟⡿⣖⣻⢾⣫⡜⣧⠆⠱⠸⠤⠙⠓⠿⠦⢭⠁⠀⠀⠀⠀⠀⠀⠀⠀⡞⢳⡀⠀⠀⠀⠀⠔⠀⠀⠀⡠⢞⡱⠘⣌⠲⢩⣿⡏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⡼
⠀⠙⠿⣆⣾⣧⠿⢾⡿⣽⢋⠟⠛⠛⠛⠷⣯⣍⣉⡤⡔⡂⡀⠀⠀⠈⠲⠀⠀⠀⠀⠀⢸⠃⢀⣷⡀⠀⠀⠀⢀⡤⠒⡍⡚⢤⠑⡭⢐⠣⢹⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠞⡉
⠀⠙⠒⢋⣙⡏⠀⣧⢟⡟⠁⠀⢆⣀⣀⠀⠈⢾⠽⣦⣥⣑⣰⡍⣲⣤⣤⣤⣤⣤⣤⠴⢋⠰⠘⣇⠑⠒⠒⢚⠛⠉⠉⣧⡑⡂⢇⠦⣉⠞⠀⠻⣆⣘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⡐
⠀⠀⠀⡼⠘⠃⠀⣿⡎⠀⠀⢰⡿⢛⠿⣷⣆⠀⡿⡽⣯⣝⢁⣾⣿⣯⢻⣯⣿⣟⣦⡘⠄⠎⠀⠀⠘⡆⡍⠄⣂⣡⣾⠏⣧⢉⢆⠲⡁⠎⣀⣠⣴⠾⢿⡻⢿⣿⣿⣿⣿⣿⣿⣿⣆
⠀⢀⡎⠀⠀⠀⣼⣷⠁⢀⣠⠼⣃⠎⠲⣁⠛⡻⣵⣹⣟⢿⡾⣭⣟⣿⡿⠱⣿⣾⢙⢛⡋⢌⡒⢂⡼⢡⢘⣴⠟⣉⡡⢂⣼⢊⣌⣦⣷⡿⣟⡿⣿⢿⣿⣿⣗⣛⡟⣿⡿⠿⣯⣯⣾
⠀⢸⠀⠀⠀⠀⠉⣇⢞⡟⣐⢃⠆⢎⡱⣨⠱⣁⢛⣯⢽⣷⡳⣄⡿⢋⠰⢁⣿⣿⠄⢂⢌⠣⣘⠰⣧⣦⣾⡿⢫⣍⣽⣿⣿⣾⣟⣿⣳⢿⣻⣽⢯⣟⡾⣽⣦⡀⡇⢭⢒⡆⠉⢿⣿
⢢⢸⠀⠀⠀⠀⠀⡟⡌⣷⠈⣆⠚⠈⠀⠀⠀⠁⠊⢼⣧⠝⣿⣮⡏⢢⣌⠌⢡⠀⠀⠀⠀⡧⠰⣡⣾⡿⢫⡾⣛⠿⣫⣾⢿⣳⣟⡾⣽⣻⡵⣯⣟⡾⣟⣯⣿⠱⣿⣾⠗⠉⢦⡬⠯
⠀⠑⡆⠀⠀⠀⠀⠻⣦⣹⣮⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣾⣇⠉⢻⡀⠨⢣⡂⠑⢰⠔⢧⡇⣷⣿⢟⣵⣿⠫⣡⣾⣿⡿⣟⡿⣞⡿⣽⣳⢿⣳⣯⢿⣽⣳⢯⡇⣷⡽⠃⠀⠀⠀⠀
⠢⣠⠳⡀⠀⠀⠀⠀⠹⡙⣷⡆⠀⠀⡄⠀⠀⠀⠀⠀⠀⠈⢿⣦⣀⡗⠲⢤⣹⡾⠃⠼⣧⣿⣻⣿⣿⣽⣃⣼⣿⣿⣻⣽⣻⡽⣯⣟⡷⣯⣟⡿⣞⡿⣾⡽⣯⠟⠉⠀⠀⠀⠀⠀⠀
⠀⡇⠀⠙⡄⠀⠀⠀⠀⠹⣄⠻⣄⠀⠡⠀⠀⠀⠀⠀⠀⠀⠀⢿⡍⠻⢦⣠⣋⡥⠖⠺⠟⠋⠁⠀⢀⣶⣾⢿⣻⣞⡷⣯⢿⣽⣳⢯⣿⣳⣯⢿⣽⣻⢷⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀
⢸⠀⠀⠀⢱⡀⠀⠀⠀⠀⠱⣍⠚⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣧⡀⠈⣟⢁⡤⠀⠀⠀⢀⣠⣶⣿⣻⣞⣿⣳⢯⡿⣽⣻⣞⣯⢿⡾⣷⢯⣟⡾⣽⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀




*/
function hint () {
    document.getElementById("hint").textContent = "The sky is blue ;3c";
}
let guess = 0;
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;
increaseBtn.onclick = function (){
	count++;
	countLabel.textContent = count;
}
decreaseBtn.onclick = function (){
	count--;
	countLabel.textContent = count;
}
const bunnibun = 230;
let points = 0;
function gotoResult(){
    document.getElementById("resultContainer").style.display = "block";
    document.getElementById("guessContainer").style.display = "none";
    document.getElementById("counterContainer").style.display = "none";
    guess = document.getElementById("guessInput").value;
}
function result(){
    if (guess == bunnibun && count == bunnibun){
        points = 2;
        document.getElementById("twoPTsP").style.display = "inline";
    } else if (guess == bunnibun && count != bunnibun || guess != bunnibun && count == bunnibun){
        points = 1;
        document.getElementById("onePTsP").style.display = "inline";

    } else {
        points = 0;
        document.getElementById("noPTsP").style.display = "inline";
    }
}