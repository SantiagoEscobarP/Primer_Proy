const sendButton = document.querySelector('.send-button');
const welcomeTitle = document.querySelector('.welcome-title');

sendButton.addEventListener('click', () => {
  welcomeTitle.textContent = 'Se envió la información con éxito';
  welcomeTitle.classList.add('success-title');
});
