function showToast(message) {
  toastr[toastType](message.text)
}

const ALT_TEXT = '#alt#';
const HTML_TEMPLATE = {
  success: `<div style="position: fixed;top: 10vh;width: 200px;background-color: rgb(51, 102, 0);box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);padding: 14px 26px 14px 13px;border-radius: 8px;box-sizing: border-box;border: 1px solid #ebeef5;z-index: 6666;right: 20px;color: #fff;display: flex;align-items: center;justify-content: center;/* opacity: 0.5; */">
    <div style="font-size: 16px;font-weight: bold;color: #fff;text-align: center;">
      ${ALT_TEXT}
    </div>
  </div>`,
  failed: `<div style="position: fixed;top: 10vh;width: 200px;background-color: #f56c6c;box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);padding: 14px 26px 14px 13px;border-radius: 8px;box-sizing: border-box;border: 1px solid #ebeef5;z-index: 6666;right: 20px;color: #fff;display: flex;align-items: center;justify-content: center;/* opacity: 0.5; */">
    <div style="font-size: 16px;font-weight: bold;color: #fff;text-align: center;">
      ${ALT_TEXT}
    </div>
  </div>`
}

function toast(message) {
  const elem = document.createElement('div');
  const text = (HTML_TEMPLATE[message.toastType] || HTML_TEMPLATE.success).replace(ALT_TEXT, message.text);
  elem.innerHTML = text;
  document.body.appendChild(elem);
  setTimeout(function() {
    document.body.removeChild(elem);
  }, 6000);
}

chrome.runtime.onMessage.addListener(function(message){
  switch(message.type) {
    case 'toast':
      toast(message);
      window.open('http://demo.mayueyue.com/showdownjs.html');
      break;
    default:
      break;
  }
});
