
function messageListener(request, sender, sendResponse) {
  console.log('receive copy');
  switch (request.type) {
    case 'copy':
      utils.copyToCliboard({
        text: request.text,
        success: '拷贝笔记成功',
        error: '拷贝笔记失败'
      });
      break;
    case 'generate':
      sendResponse('recie in bg');
      break;
    default:
      break;
  }
}

console.log('utils', utils);
chrome.runtime.onMessage.addListener(messageListener);
