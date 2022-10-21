const myToogle = document.getElementById('toogle')

myToogle.addEventListener('click', () => {
  myToogle.classList.toggle('toogle__before')
  document.body.classList.toggle('background__before')
})
