
const mario = document.querySelector('.mario');
const pokey = document.querySelector('.pokey');
const arbusto = document.querySelector('.arbusto')

const jump = () =>{
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}
const loop = setInterval(() => {

    const pokeyPosition = pokey.offsetLeft;
    const arbustoPosition= arbusto.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    console.log(marioPosition);

    if(pokeyPosition <= 80 && pokeyPosition > 0 && marioPosition < 80){

        pokey.style.animation = 'none';
        pokey.style.left = `${pokeyPosition}px`;

        arbusto.style.animation = 'none';
        arbusto.style.left = `${arbustoPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = './img/game-over.gif';
        mario.style.width = '120px'

    }
    
}, 10);


document.addEventListener('keypress', jump);