let bgBigCup = document.querySelector('.bg-big-cup')
let bigCupImage = document.querySelector('.big-cup')
let greenCup = document.querySelector('.green')
let lightPinkCup = document.querySelector('.light-pink') // mudar .src e background
let pinkCup = document.querySelector('.pink')

greenCup.addEventListener('click', () => {
  bigCupImage.src = './images/img1.png'
  bgBigCup.style.background = '#017143'
  bgBigCup.style.transition = '.7s'
})

lightPinkCup.addEventListener('click', () => {
  bigCupImage.src = './images/img2.png'
  bgBigCup.style.background = '#D85470'
  bgBigCup.style.transition = '.7s'
})

pinkCup.addEventListener('click', () => {
  bigCupImage.src = './images/img3.png'
  bgBigCup.style.background = '#7E2567'
  bgBigCup.style.transition = '.7s'
})
