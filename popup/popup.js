
var scripts = {
  generate: 'inject/generate.js'
}

document.querySelector("#fetchAllBtn").addEventListener("click", function() {
  chrome.tabs.executeScript({
    file: scripts.generate
  }, function(data) {
    console.log('data', data);
  });
});
