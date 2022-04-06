let editedPlayer = 0

const players = JSON.parse(localStorage.getItem('players')) || [
    {
        name: '',
        symbol: 'X',
    },
    {
        name: '',
        symbol: 'O',
    },
]

const backdrop = document.getElementById('backdrop')
const modal = document.getElementById('config-overlay')
const configErrorMsg = document.getElementById('config-error')
const formElement = document.querySelector('form')
const nameInputElement = formElement.querySelector('input[name="playername"]')
const gameField = document.getElementById('active-game')

const editPlayer1Btn = document.getElementById('edit-player-1-btn')
const editPlayer2Btn = document.getElementById('edit-player-2-btn')
const closeEditBtn = document.getElementById('close-edit-btn')
const startNewGameBtn = document.getElementById('start-newGame-btn')

window.addEventListener('load', loadPlayersNames)

editPlayer1Btn.addEventListener('click', openEdit)
editPlayer2Btn.addEventListener('click', openEdit)

backdrop.addEventListener('click', closeEdit)
closeEditBtn.addEventListener('click', closeEdit)

formElement.addEventListener('submit', editPlayerName)
nameInputElement.addEventListener('input', inputValidate)

startNewGameBtn.addEventListener('click', startNewGame)
