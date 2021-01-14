const utils = {
  toast(params) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(tabs) {
      if (tabs[0] && tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, params);
      }
    });
  },

  copyToCliboard({ text, success, error }) {
    const btn = document.getElementById('copyBtn');
    const textarea = document.getElementById('textarea');
    const clipboard = new ClipboardJS('.copy-btn');
    clipboard.on('success', function(e) {
      utils.toast({
        type: 'toast',
        toastType: 'success',
        text: success || '拷贝成功'
      });
      e.clearSelection();
    });
    
    clipboard.on('error', function(e) {
      utils.toast({
        type: 'toast',
        toastType: 'failed',
        text: error || '拷贝失败'
      });
      e.clearSelection();
    });

    textarea.innerHTML = text;
    btn.click();
  }
}
