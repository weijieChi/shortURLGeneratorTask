'use strict'

const urlForm = document.querySelector('#url-form')

// url valid function
function isValidHttpUrl(urlString) {
  try {
    const newUrl = new URL(urlString);
    return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
  } catch (err) {
    return false;
  }
}

// from end URL validate
urlForm.addEventListener('submit', (submitEvent) => {
  submitEvent.preventDefault()
  const urlString = document.querySelector('#url-string').value.trim()
  if (urlString === '') {
    alert('Please enter URL string')
  }
  else if (isValidHttpUrl(urlString)) {
    urlForm.submit()
  } else {
    alert('The URL you entered does not comply with the rules.')
  }
})