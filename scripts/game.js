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
  if (target.tagName !== 'LI' || isGameOver) return

  const row = target.dataset.row - 1
  const col = target.dataset.col - 1

  if (gameData[row][col] > 0) {
    alert('Please. select an empty field!')
    return
  }

  target.textContent = players[activePlayer].symbol
  target.classList.add('disabled')

  gameData[row][col] = activePlayer + 1

  const winnerID = checkGameIsOver()
  if (winnerID !== 0) {
    gameOver(winnerID)
  }

  gameRound++
  changeActivePlayer()
  activePlayerName.textContent = players[activePlayer].name
}

function checkGameIsOver() {
  for (let i = 0; i < 3; i++) {
    // Check rows
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0]
    }
  }

  // Cheeck cols
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i]
    }
  }

  // Check axis left

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0]
  }

  // Check axis rigth

  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2]
  }

  // Check draw
  if (gameRound === 9) return -1

  return 0
}

function gameOver(winnerID) {
  gameOverBoard.classList.remove('hidden')
  if (winnerID > 0) {
    gameOverBoard.firstElementChild.firstElementChild.textContent =
      players[activePlayer].name
  } else {
    gameOverBoard.firstElementChild.textContent = "It's a draw!"
  }
  isGameOver = true
}
