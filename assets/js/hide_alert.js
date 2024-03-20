const $d = document
const $buttonTarget = $d.querySelector('.button-acepted')
const $backgroundTarget = $d.querySelector('.fondo-notice')
const $time = getComputedStyle(document.body).getPropertyValue('--time-hidden')

function hideAlert (e) {
  const timeToCountDown = Number(
    $time
      .split('', 3)
      .join('')
  ) * 1000

  if (e.target === $buttonTarget) {
    $backgroundTarget.classList.add('hidden')
  }

  setTimeout(() => {
    $backgroundTarget.classList.add('real-hidden')
    localStorage.setItem('isHidden', 'y')
  }, timeToCountDown)
}



$d.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('isHidden') === 'y') {
    $backgroundTarget.classList.add('real-hidden')
  }
})
$d.addEventListener('click', hideAlert)
