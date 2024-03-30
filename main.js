let intervalId
let timeLeft
let paused = false
let listExercises = []
let currentExercises = 0
let offset = 0

function startTimer() {
  const minutesInput = document.getElementById('minutes')
  const secondsInput = document.getElementById('seconds')
  const minutes = parseInt(minutesInput.value)
  const seconds = parseInt(secondsInput.value)
  timeLeft = minutes * 60 + seconds

  intervalId = setInterval(() => {
    if (!paused) {
      if (timeLeft < 0) {
        clearInterval(intervalId)
        document.getElementById('timer').innerText = 'Tempo esgotado!'
        showExercise()
        if (currentExercises === 9) {
          offset = offset + 10
          currentExercises = 0
          getExercices()
          return
        }
        currentExercises++
      } else {
        const minutes = Math.floor(timeLeft / 60)
        const seconds = timeLeft % 60
        document.getElementById('timer').innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        timeLeft--
      }
    }
  }, 1000)
}

document.getElementById('start').addEventListener('click', () => {
  startTimer()
})

document.getElementById('pause').addEventListener('click', () => {
  paused = !paused
  document.getElementById('pause').innerText = paused ? 'Continuar' : 'Pausar'
})

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(intervalId)
  paused = false
  document.getElementById('pause').innerText = 'Pausar'
  document.getElementById('timer').innerText = '00:00'
  document.getElementById('minutes').value = '00'
  document.getElementById('seconds').value = '00'
})

document.getElementById('finishedExercise').addEventListener('click', () => {
  document.getElementById('exerciseContainer').style.display = 'none'
})

function showExercise() {
  const nameExercise = document.getElementById('name_exercise')
  const instructionsExercise = document.getElementById('instructions_exercise')

  nameExercise.innerText = listExercises[currentExercises].name
  instructionsExercise.innerText = listExercises[currentExercises].instructions
  document.getElementById('exerciseContainer').style.display = 'block'
}