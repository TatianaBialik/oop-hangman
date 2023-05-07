class Hangman {
  #word;
  #remainingGuesses;
  #guessedLetters = [];
  #status = 'playing';

  constructor(word, remainingGuesses) {
    // this.#theWord = this.#words[Math.floor(Math.random() * (this.#words.length - 1))];
    this.#word = word.split('');
    this.#remainingGuesses = remainingGuesses;
  }

  getPuzzle() {
    // a method that returns a string that represents the current state of the puzzle
    return this.#word.map(letter => {
      if (this.#guessedLetters.includes(letter)) {
        return letter;
      } else {
        return '*';
      }
    }).join('');
  }

  makeGuess(guess) {
    // a method that takes a single letter as a parameter and updates the game state accordingly
    console.log(guess)
    if (guess.toLowerCase() === guess && !this.#guessedLetters.includes(guess)) {
      this.#guessedLetters.push(guess);
      this.#remainingGuesses--;
      this.calculateStatus();
    }
  }

  calculateStatus() {
    // a method that updates the status property based on the current state of the game
    if (!this.getPuzzle().split('').includes('*')) {
      this.#status = 'finished';
      return;
    }

    if (this.#remainingGuesses === 0) {
      this.#status = 'failed';
    }
  }

  getStatusMessage() {
    if (this. #status === 'playing')
      return 'Remaining guesses: ' + this.#remainingGuesses;

    if (this.#status === 'finished') 
      return 'Great work! You guessed the word!';
    
    if (this.#status === 'failed')
      return 'Nice try! The word was ' + this.#word.join('');
  }

  getGuessedLetters() {
    return this.#guessedLetters.join();
  }
}

const hangman = new Hangman('hangman', 7);

function render() {
  const puzzle = document.querySelector('#puzzle');
  const status = document.querySelector('#status');
  const guessedLetters = document.querySelector('#guessed-letters');

  puzzle.textContent = hangman.getPuzzle();
  status.textContent = hangman.getStatusMessage();

  function guess(e) {
    if (e.code < 65 || e.code > 90) return;

    hangman.makeGuess(e.key);
    puzzle.textContent = hangman.getPuzzle();
    status.textContent = hangman.getStatusMessage();
    guessedLetters.textContent = hangman.getGuessedLetters();
  }

  window.addEventListener('keypress', guess);
}

render();