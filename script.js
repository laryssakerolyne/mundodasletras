document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.letter');
    const wordContainer = document.getElementById('word-container');
    const clearButton = document.getElementById('clear-word');
    const saveButton = document.getElementById('save-word');
    const wordList = document.getElementById('word-list');

    // Função para adicionar letra ao contêiner de palavras
    function addLetterToWordContainer(letter) {
        const span = document.createElement('span');
        span.textContent = letter;
        span.className = 'letter';
        span.draggable = false;
        span.addEventListener('click', () => {
            span.remove();
        });
        wordContainer.appendChild(span);
    }

    // Arrastar letras
    letters.forEach(letter => {
        letter.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.textContent);
        });
    });

    // Soltar letras no contêiner de palavras
    wordContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    wordContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        const letter = e.dataTransfer.getData('text/plain');
        addLetterToWordContainer(letter);
    });

    // Limpar palavra
    clearButton.addEventListener('click', () => {
        wordContainer.innerHTML = '<p>Arraste as letras aqui para formar uma palavra.</p>';
    });

    // Salvar palavra
    saveButton.addEventListener('click', () => {
        const lettersInWord = wordContainer.querySelectorAll('.letter');
        let word = '';
        lettersInWord.forEach(letter => {
            word += letter.textContent;
        });
        if (word) {
            const listItem = document.createElement('li');
            listItem.textContent = word;
            wordList.appendChild(listItem);
            clearButton.click(); // Limpar o contêiner após salvar
        }
    });
});
