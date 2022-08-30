const change = document.getElementById('ch')
const inputDark = document.querySelectorAll('input')
const inputDark2 = document.getElementsByClassName('form-control-lg')

ch.addEventListener('change', () => {
 document.body.classList.toggle('dark')
 inputDark.forEach((array) => {
 array.classList.toggle('bg-dark')
 });
})
