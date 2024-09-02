document.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('click', () => {
        const balloonContainer = document.querySelector('.balloon-container');
        const balloon = document.createElement('div');
        
        balloon.className = 'balloon';
        balloon.textContent = letter.dataset.letter;
        
        const rect = letter.getBoundingClientRect();
        const containerRect = balloonContainer.getBoundingClientRect();
        
        balloon.style.top = `${rect.top - containerRect.top}px`;
        balloon.style.left = `${rect.left - containerRect.left + letter.offsetWidth / 2 - 25}px`;
        
        balloonContainer.appendChild(balloon);
        
        setTimeout(() => {
            balloon.classList.add('show');
            setTimeout(() => {
                balloon.classList.remove('show');
                balloon.remove();
            }, 1500);
        }, 10); // Delay to ensure the balloon is visible before animation starts
    });
});
