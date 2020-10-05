class Hangman {
    constructor(words, guessleft) {
        this.word = words.toLowerCase().split('')
        this.guessLeft = guessleft
        this.guess = []
        this.condition = 'playing'
    }

    get Puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guess.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'

            }
        })
        return puzzle
    }

    get StatusMessage() {
        if (this.condition === 'playing') {
            return `Guess Left : ${this.guessLeft}`
        } else if (this.condition === 'failed') {
            return `Nice Try! The Word is " ${this.word.join('')} "`
        } else {
            return 'Congratulations,You Won!'
        }
    }

    status() {
        const finished = this.word.every((letter) => {
            return this.guess.includes(letter) || letter === ' '
        })


        if (this.guessLeft === 0) {
            this.condition = 'failed'
        } else if (finished) {
            this.condition = 'finished'
        } else {
            this.condition = 'playing'
        }
        return this.condition
    }

    guessPuzzle(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guess.includes(guess)
        const isBadguess = !this.word.includes(guess)

        if (this.condition !== 'playing') {
            return undefined
        }
        if (isUnique && !isBadguess) {
            this.guess = [...this.guess, guess]
        } else if (isUnique && isBadguess) {
            this.guessLeft--
        }

        this.status()
    }
}
// module.exports = Hangman
export {Hangman as default}