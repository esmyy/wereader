function showToast(message) {
  toastr[toastType](message.text)
}

chrome.runtime.onMessage.addListener(function(message){
  switch(message.type) {
    case 'toast':
      toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')
      break;
    default:
      break;
  }
});
