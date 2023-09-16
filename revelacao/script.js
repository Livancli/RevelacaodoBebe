const revealButton = document.getElementById('revealButton');
const revealContainer = document.getElementById('revealContainer');
const countdownElement = document.getElementById('countdown');
const animationElement = document.getElementById('animation');
const genderTextElement = document.getElementById('genderText');

const genderImage = document.createElement('img');


document.body.style.overflow = "hidden";

revealButton.addEventListener('click', () => {
  revealButton.disabled = true;
  revealContainer.classList.remove('hidden');
  revealButton.classList.add('hidden');
  let countdown = 15;
  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.innerText = countdown.toString();
if (countdown === 0) {
  clearInterval(countdownInterval);

  animationElement.innerHTML = '';
  animationElement.appendChild(genderImage);
  countdownElement.classList.add('hidden');

document.body.style.backgroundImage = `url(./img/lauraEmanuela.jpg)`;
document.body.style.backgroundSize = 'cover'; // Ajuste o tamanho da imagem conforme necessário
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center center'; // Centraliza tanto na horizontal quanto na vertical

}
}, 1000);
});

