// Define a global variable called hangman and assign it to a new instance of Hangman with a random word and a fixed number of guesses
// You can use any words you like, but make sure they are lowercase and have no special characters or numbers
// You can also use any number of guesses you like, but make sure it is reasonable for the difficulty level of your words

// Define a function called render() that updates the puzzle and status paragraphs with their respective values from hangman.getPuzzle() and hangman.getStatusMessage()

// Call render() once at the beginning of your script to display the initial state of the game to the player

// Add an event listener to the window object that listens for the "keypress" event

class Hangman {
  #word;
  #remainingGuesses;
  #guesedLetters = [];
  #status = 'playing';

  constructor(word, remainingGuesses) {
    // this.#theWord = this.#words[Math.floor(Math.random() * (this.#words.length - 1))];
    this.#word = word.split('');
    this.#remainingGuesses = remainingGuesses;
  }

  getPuzzle() {
    // a method that returns a string that represents the current state of the puzzle
    return this.#word.map(letter => {
      if (this.#guesedLetters.includes(letter)) {
        return letter;
      } else {
        return '*';
      }
    }).join('');
  }

  makeGuess(guess) {
    // a method that takes a single letter as a parameter and updates the game state accordingly
    if (guess.toLowerCase() === guess && !this.#guessedLetters.includes(guess)) {
      this.#guesedLetters.push(guess);
      this.#remainingGuesses--;
      this.calculateStatus();
    }
  }

  calculateStatus() {
    // a method that updates the status property based on the current state of the game
    if (!this.getPuzzle.split('').includes('*')) {
      this.#status = 'finished';
      return;
    }

    if (this.#remainingGuesses === 0) {
      this.#status = 'failed';
    }
  }

  getStatusMessage() {
    
  }

}

const hangman = new Hangman('hangman', 7);
console.log(hangman.getPuzzle())