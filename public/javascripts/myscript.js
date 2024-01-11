'use strict'

// Clipboard API
async function writeToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    alert('Your link has been copied!')
  } catch (error) {
    alert(error, 'Your browser may not support clipboard copying')
    console.error(error)
  }
}

// copy button event
const copyButton = document.querySelector('#copy-button')
copyButton.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.matches('#copy-button')) {
    const urlText = document.querySelector('#url-link').href
    writeToClipboard(urlText)
  }
})