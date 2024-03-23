const name = document.getElementById('name')
const phone = document.getElementById('phone')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Must enter your name.')
  }
  if (messages.length > 0) {
   e.preventDefault()
   errorElement.innerText = messages.join(', ')
  }
})