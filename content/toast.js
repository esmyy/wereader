function showToast(message) {
  toastr[toastType](message.text)
}

const baseHtml = `
  <div>
    is
  </div>
`
function toast() {
  const elem = document.createElement('div');
  elem.setAttribute('style', "padding: 10px; background: red; display: fixed; top: 10vh; width: 200px;")
  elem.innerHTML = baseHtml;
  document.body.appendChild(elem)
}

console.log('注入');
chrome.runtime.onMessage.addListener(function(message){
  console.log('assss');
  toast();
  switch(message.type) {
    case 'toast':
      break;
    default:
      break;
  }
});
