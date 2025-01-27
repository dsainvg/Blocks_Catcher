const basket = document.getElementById('basket');
const blocks = document.getElementsByClassName('block');
const game = document.getElementById('game');
let blockNo = 1;
let score = 0;
let lives = 3;

const firstbrick = document.createElement('div');
firstbrick.id = 'bricks';
const brickImg = document.createElement('img');
brickImg.className = 'bricksimg';
brickImg.src = 'bricks.png';
brickImg.alt = 'basket';
firstbrick.appendChild(brickImg);
const lifetaker = document.createElement('div');
lifetaker.id = 'bricks';
const lifetakerImg = document.createElement('img');
lifetakerImg.className = 'bricksimg';
lifetakerImg.src = 'lifetaker.png';
lifetakerImg.alt = 'basket';
lifetaker.appendChild(lifetakerImg);


function updateBasket(a) {
    var left = parseInt(window.getComputedStyle(basket).getPropertyValue('left'));
    if((left +a >20)&&(left +a < 850)){
    console.log(left+a);
    basket.style.left = (left + a) + 'px';
    }
}
a=1500;
document.addEventListener('keydown', event => {
    if ((event.key === 'ArrowLeft')||(event.key === "A")||(event.key === "a")) {
        console.log("LEFT");
        updateBasket(-10);
    }
    if ((event.key === 'ArrowRight')||(event.key === "D")||(event.key === "d")) {
        updateBasket(10);
        console.log("RIGHT");
    }
});
  

function ran(){
    return Math.floor(Math.random() * 820);
}

function executeAtInterval(callback, interval) {
    if (typeof callback !== 'function') {
        throw new Error('Callback must be a function');
    }
    if (typeof interval !== 'number' || interval <= 0) {
        throw new Error('Interval must be a positive number');
    }

    setInterval(callback, interval);
}


executeAtInterval(() => {
    if(lives>0){
    generateBricks();}
}, a);

function generateBricks(){
    const newbrick = firstbrick.cloneNode(true);
    newbrick.style.left = ran() + 'px';
    game.appendChild(newbrick);
    blockNo++;
    if(blockNo%10==0){
        generateBlack();
    }
    moveBricks(newbrick);
}

function moveBricks(newbrick){
    var top = -100;
    var id = setInterval(frame, 10);
    function frame() {
        if (top > 300) {
            clearInterval(id);
            left = parseInt(window.getComputedStyle(newbrick).getPropertyValue('left'));
            basketleft = parseInt(window.getComputedStyle(basket).getPropertyValue('left'));
            if (left > basketleft-100 && left < basketleft + 100) {
                score++;
                
                document.getElementById('score-count').innerHTML = score;
            }
            newbrick.remove();
        } else {
            top++;
            newbrick.style.top = top + 'px';
        }
    }
}

function generateBlack(){
    const newbrick = lifetaker.cloneNode(true);
    newbrick.style.left = ran() + 'px';
    game.appendChild(newbrick);
    movelife(newbrick);
}

function movelife(newbrick){
    var top = -100;
    var id = setInterval(frame, 10);
    function frame() {
        if (top > 300) {
            clearInterval(id);
            left = parseInt(window.getComputedStyle(newbrick).getPropertyValue('left'));
            basketleft = parseInt(window.getComputedStyle(basket).getPropertyValue('left'));
            if (left > basketleft-75 && left < basketleft + 75) {
                lives--;
                checklives();
            }
            newbrick.remove();
        } else {
            top++;
            newbrick.style.top = top + 'px';
        }
    }
}

function checklives(){
    if(lives==2){
        const liveImgCh = document.getElementById('lives-count2')
        liveImgCh.innerHTML = `<svg width="40px" height="40px" viewBox="-3.36 -3.36 22.72 22.72" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M8 15L1.24264 8.24264C0.44699 7.44699 0 6.36786 0 5.24264V5.05234C0 2.8143 1.8143 1 4.05234 1C5.14512 1 6.1853 1.44095 6.94309 2.2124L5.85583 6.2701L7.7832 8.19746L7.10553 9.55279L8.89438 10.4472L10.2167 7.80255L8.14408 5.72991L9.74447 1.65122C10.3932 1.23104 11.1567 1 11.9477 1C14.1857 1 16 2.8143 16 5.05234V5.24264C16 6.36786 15.553 7.44699 14.7574 8.24264L8 15Z" fill="red"/> </g></svg>`;
    }
    if(lives==1){
        const liveImgCh = document.getElementById('lives-count1')
        liveImgCh.innerHTML = `<svg width="40px" height="40px" viewBox="-3.36 -3.36 22.72 22.72" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M8 15L1.24264 8.24264C0.44699 7.44699 0 6.36786 0 5.24264V5.05234C0 2.8143 1.8143 1 4.05234 1C5.14512 1 6.1853 1.44095 6.94309 2.2124L5.85583 6.2701L7.7832 8.19746L7.10553 9.55279L8.89438 10.4472L10.2167 7.80255L8.14408 5.72991L9.74447 1.65122C10.3932 1.23104 11.1567 1 11.9477 1C14.1857 1 16 2.8143 16 5.05234V5.24264C16 6.36786 15.553 7.44699 14.7574 8.24264L8 15Z" fill="red"/> </g></svg>`;
    }
    if(lives==0){
        const liveImgCh = document.getElementById('lives-count0')
        liveImgCh.innerHTML = `<svg width="40px" height="40px" viewBox="-3.36 -3.36 22.72 22.72" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M8 15L1.24264 8.24264C0.44699 7.44699 0 6.36786 0 5.24264V5.05234C0 2.8143 1.8143 1 4.05234 1C5.14512 1 6.1853 1.44095 6.94309 2.2124L5.85583 6.2701L7.7832 8.19746L7.10553 9.55279L8.89438 10.4472L10.2167 7.80255L8.14408 5.72991L9.74447 1.65122C10.3932 1.23104 11.1567 1 11.9477 1C14.1857 1 16 2.8143 16 5.05234V5.24264C16 6.36786 15.553 7.44699 14.7574 8.24264L8 15Z" fill="red"/> </g></svg>`;
        endcredits();
    }
    
}

function endcredits(){
    game.innerHTML =   `<div id="endcredits">
                        <h1>Game Over</h1>
                        <h1>Your Score is ${score}</h1>
                        <button class="reload" onclick="location.reload()">Play Again</button>
                        </div>`;    
}