function loadPlayersNames() {
    const players = JSON.parse(localStorage.getItem('players'))

    if (players && players[0].name) {
        document
            .getElementById('player-1-data')
            .querySelector('h3').textContent = players[0].name
    }
    if (players && players[1].name) {
        document
            .getElementById('player-2-data')
            .querySelector('h3').textContent = players[1].name
    }
}

function openEdit(e) {
    modal.classList.remove('hidden')
    backdrop.classList.remove('hidden')
    nameInputElement.focus()
    editedPlayer = e.target.dataset.player
}

function closeEdit() {
    modal.classList.add('hidden')
    backdrop.classList.add('hidden')
    configErrorMsg.textContent = ''
    nameInputElement.value = ''
    formElement.classList.remove('error')
}

function editPlayerName(e) {
    e.preventDefault()

    const formDataValue = new FormData(e.target).get('playername').trim()

    if (!formDataValue) {
        configErrorMsg.textContent = 'Please, enter your name!'
        formElement.classList.add('error')
        return
    }
    if (formDataValue.length < 3) {
        configErrorMsg.textContent =
            'Player name must include at least 3 characters!'
        formElement.classList.add('error')
        return
    }

    players[editedPlayer - 1].name = formDataValue
    localStorage.setItem('players', JSON.stringify(players))

    document
        .getElementById(`player-${editedPlayer}-data`)
        .querySelector('h3').textContent = formDataValue

    nameInputElement.value = ''
    formElement.classList.remove('error')
    closeEdit()
}

function inputValidate(e) {
    if (!formElement.classList.contains('error')) return

    if (nameInputElement.value.length > 2) {
        configErrorMsg.textContent = ''
        formElement.classList.remove('error')
    }
}

function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please, enter custom user name!')
        return
    }

    gameField.classList.remove('hidden')
}
