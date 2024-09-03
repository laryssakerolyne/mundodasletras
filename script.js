const word = 'javascript'; // Palavra a ser adivinhada
let guessedWord = Array(word.length).fill('_');
let attempts = 6;
const wordDisplay = document.getElementById('wordDisplay');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const hangmanImageDisplay = document.getElementById('hangmanImageDisplay');
const hangmanImages = ['hangman0.png', 'hangman1.png', 'hangman2.png', 'hangman3.png', 'hangman4.png', 'hangman5.png', 'hangman6.png'];

document.getElementById('guessButton').addEventListener('click', () => {
    const letter = document.getElementById('letterInput').value.toLowerCase();
    if (letter && letter.length === 1) {
        if (word.includes(letter)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    guessedWord[i] = letter;
                }
            }
            wordDisplay.textContent = guessedWord.join(' ');
            message.textContent = '';
        } else {
            attempts--;
            hangmanImageDisplay.src = hangmanImages[6 - attempts];
            attemptsDisplay.textContent = `Tentativas restantes: ${attempts}`;
            if (attempts === 0) {
                message.textContent = `Você perdeu! A palavra era "${word}".`;
            }
        }
        document.getElementById('letterInput').value = '';
    }
});

wordDisplay.textContent = guessedWord.join(' ');
