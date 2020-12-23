const SELECTOR_NAME = {
  copyBtn: '#copyBtn',
  generateBtn: '#generateBtn',
}

const INJECT_SCRIPTS = {
  copy: './inject/copy-notes.js',
  generate: './inject/generate.js'
}

document.querySelector(SELECTOR_NAME.copyBtn).addEventListener('click', function() {
  chrome.tabs.executeScript({
    file: INJECT_SCRIPTS.copy
  }, function(data) {
    console.log('data', data); 
    window.close();
  });
});

document.querySelector(SELECTOR_NAME.generateBtn).addEventListener('click', function() {
  chrome.tabs.executeScript({
    file: INJECT_SCRIPTS.generate
  }, function(data) {
    console.log('data', data);
    window.close();
  });
});
