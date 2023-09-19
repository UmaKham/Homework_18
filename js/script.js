let timer = document.querySelector('.time')
let int

timer.innerHTML = 60

document.getElementById('start').addEventListener('click', () => {
  clearInterval(int)
  int = setInterval(subtime, 1000);
})

document.getElementById('stop').addEventListener('click', () => {
  clearInterval(int)
})

document.getElementById('clear').addEventListener('click', () => {
  timer.innerHTML = 60
})

function subtime() {
  if (timer.innerHTML > 0) {
    timer.innerHTML--;
  } else {
    confetti();
  }
}

console.log(timer);