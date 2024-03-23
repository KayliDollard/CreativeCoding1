const name = document.getElementById('name')
const phone = document.getElementById('phone')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    message.push('Must enter your name.')
  }
  if (message.length > 0) {
   e.preventDefault()
   errorElement.innerText = message.join(', ')
  }
})