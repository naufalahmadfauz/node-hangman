import Hangman from '../../src/utils/hangman'
import getPuzzle from './requestPuzzle'



const guessEl = document.querySelector('#guess')
const statusEl = document.querySelector('#status')
let player1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    player1.guessPuzzle(guess)
    render()
})

const render = () => {
    guessEl.innerHTML = ''
    player1.Puzzle.split('').forEach((data) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = data
        guessEl.appendChild(letterEl)
    })
    statusEl.textContent = player1.StatusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle(3)
    player1 = new Hangman(puzzle, 8)
    render()
}
document.querySelector('#reset').addEventListener('click', startGame)
startGame()