chrome.runtime.onInstalled.addListener(async (tab) => {
  // await chrome.action.setBadgeText({
  //   text: "ON",
  // });
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  console.log("update");
});

chrome.webNavigation.onCommitted.addListener(() => {
  console.log("page load");
});
