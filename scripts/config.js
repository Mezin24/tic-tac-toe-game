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
