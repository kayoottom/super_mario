const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {
 
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imgs/imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.margin = '20px';
    }

}, 10);

document.addEventListener('keydown', jump);