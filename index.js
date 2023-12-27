// index.js

// Score functionality

let scoreH = document.getElementById("score-h")
let scoreG = document.getElementById("score-g")

let points3Home = document.getElementById("3pointsHome")
let points2Home = document.getElementById("2pointsHome")
let points1Home = document.getElementById("1pointsHome")
let points3Guest = document.getElementById("3pointsGuest")
let points2Guest = document.getElementById("2pointsGuest")
let points1Guest = document.getElementById("1pointsGuest")

    // Add points to Home team

pointsH = 0

points3Home.addEventListener ("click", () => {
    pointsH += 3
    addPointsH()
})

points2Home.addEventListener ("click", () => {
    pointsH += 2
    addPointsH()
})

points1Home.addEventListener ("click", () => {
    pointsH += 1
    addPointsH()
})

function addPointsH() {
    scoreH.textContent = pointsH
}

    // Add points to Guest team

pointsG = 0

points3Guest.addEventListener ("click", () => {
    pointsG += 3
    addPointsG()
})

points2Guest.addEventListener ("click", () => {
    pointsG += 2
    addPointsG()
})

points1Guest.addEventListener ("click", () => {
    pointsG += 1
    addPointsG()
})

function addPointsG() {
    scoreG.textContent = pointsG
}

// Sider functionality

let prevBtnH = document.getElementById("prev-btn-h")
let nextBtnH = document.getElementById("next-btn-h")
let prevBtnG = document.getElementById("prev-btn-g")
let nextBtnG = document.getElementById("next-btn-g")

let teamLogoH = document.getElementById("teamLogoH")
let teamLogoG = document.getElementById("teamLogoG")

let logoImg = ["washington-wizards.png", "denver-nuggets.png", "dallas-mavericks.png", "Clevelan-Cavaliers.png", "chicago-bulls.png", "charlotte-hornets.png", "brooklyn-nets.png", "boston-celtics.png", "atlanta-hawks.png", "utah-jazz.png", "toronto-raptors.png", "san-antonio.png", "sacramento-kings.png", "portland-trai.png", "phoenix-suns.png", "philadelphia-76ers.png", "orlando-magic.png", "oklahoma-city.png", "new-york.png", "new-orleans.png", "minnesota-timberwolves.png", "milwaukee-bucks.png", "miami-heat.png", "memphis-grizzlies.png", "los-angeles.png", "la-clippers.png", "indiana-pacers.png", "houston-rockets.png", "golden-state-warriors.png", "detroit-pistons.png"]

    //Home slider

let i = 0;

nextBtnH.addEventListener("click", () => {
    if (i >= logoImg.length - 1) i = 0 - 1;
    i++;
    return setImgH();
})

prevBtnH.addEventListener("click", () => {
    if (i <= 0) i = logoImg.length;
    i--;
    return setImgH();
    console.log("clicked")
})

function setImgH() {
    return teamLogoH.setAttribute("src", "images/" + logoImg[i]);
}

    //Guest slider

let j = 0;

nextBtnG.addEventListener("click", () => {
    if (j >= logoImg.length - 1) j = 0 - 1;
    j++;
    return setImgG();
})

prevBtnG.addEventListener("click", () => {
    if (j <= 0) j = logoImg.length;
    j--;
    return setImgG();
    console.log("clicked")
})

function setImgG() {
    return teamLogoG.setAttribute("src", "images/" + logoImg[j]);
}

//Game time
const startBtn = document.getElementById("start-btn")
const stopBtn = document.getElementById("stop-btn")
const startingMinutes = 12;
let time = startingMinutes * 60;

const timer = document.getElementById("timer");

let timerid = 

startBtn.addEventListener("click", () => {
    timerid = setInterval(updateTimer, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener("click", () => {
    clearInterval(timerid);
    startBtn.disabled = false;
    stopBtn.disabled = true;
})

function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    timer.innerHTML = `${minutes}:${seconds}`;
    time--;
}
