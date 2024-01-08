'use strict'

// Clipboard API
async function writeToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    alert('內容已經複製')
  } catch (error) {
    alert(error, '您的瀏覽器可能不支援剪貼簿複製功能')
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