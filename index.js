

const scriptURL = 'https://script.google.com/macros/s/AKfycbzJEVBwWgFug4lgRcdM6yQU23Lp0APWmw0i1p_PUaAh3uAGXXlw4ajvDQ-wki1_akoT/exec'

const form = document.forms['form-horizontal']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})