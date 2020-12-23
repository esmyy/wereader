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
        text: success || 'copy fuccessfully'
      });
      e.clearSelection();
    });
    
    clipboard.on('error', function(e) {
      utils.toast({
        type: 'toast',
        toastType: 'success',
        text: error || 'failed to copy'
      });
      e.clearSelection();
    });

    textarea.innerHTML = text;
    btn.click();
  }
}
