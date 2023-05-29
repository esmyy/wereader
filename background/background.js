function messageListener(request, sender, sendResponse) {
  switch (request.type) {
    case "copy-as-html":
      utils.copyToCliboard({
        actionType: "copy-as-html",
        text: request.text,
        success: "拷贝笔记成功",
        error: "拷贝笔记失败",
      });
      break;
    case "generate":
      break;
    default:
      break;
  }
}

chrome.runtime.onMessage.addListener(messageListener);
