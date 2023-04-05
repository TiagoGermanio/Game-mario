
const mario = document.querySelector('.mario');
const pokey = document.querySelector('.pokey');
const arbusto = document.querySelector('.arbusto');
const montanha = document.querySelector('.montanhas');
const gameOverMessage = document.querySelector('.gameOver');
const btnReload = document.querySelector('.btnReload');

btnReload.addEventListener('click', () => {
  location.reload();
});

const jump = () =>{
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}
const loop = setInterval(() => {

    const pokeyPosition = pokey.offsetLeft;
    const arbustoPosition = arbusto.offsetLeft;
    const montanhaPosition = montanha.offsetLeft;
    const { bottom } = window.getComputedStyle(mario);
    const marioPosition = +bottom.replace('px','');
    
    console.log(marioPosition);

    if(pokeyPosition <= 80 && pokeyPosition > 0 && marioPosition < 80){

        pokey.style.animation = 'none';
        pokey.style.left = `${pokeyPosition}px`;

        arbusto.style.animation = 'none';
        arbusto.style.left = `${arbustoPosition}px`;

        montanha.style.animation = 'none';
        montanha.style.left = `${montanhaPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = './img/game-over.png';
        mario.style.width = '120px'
        
        gameOverMessage.innerText = 'Game Over';
        gameOverMessage.className = 'game-over-message';
        document.body.appendChild(gameOverMessage);

    }
    
}, 10);
document.addEventListener('keypress', jump);

const btnSair = document.getElementById('btn-sair');
btnSair.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});
const btnContinuar = document.getElementById('btn-continuar');
btnContinuar.addEventListener('click', () => {
  location.reload();
});
window.addEventListener('beforeunload', (e) => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    e.returnValue = false;
  });

document.addEventListener('keypress', jump);