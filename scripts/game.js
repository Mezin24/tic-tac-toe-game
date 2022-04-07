function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please, enter custom user name!')
        return
    }

    gameField.classList.remove('hidden')
    activePlayerName.textContent = players[activePlayer].name
}

function changeActivePlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0
}

function selectField(e) {
    const target = e.target
    if (target.tagName !== 'LI') return

    target.textContent = players[activePlayer].symbol
    target.classList.add('disabled')
    changeActivePlayer()
    activePlayerName.textContent = players[activePlayer].name
}
