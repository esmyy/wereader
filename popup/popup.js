;(function addToggleListener() {
  const selector = {
    section: '.section',
    action: '.sub-action'
  };

  document.querySelectorAll(selector.section).forEach(function(section) {
    section.addEventListener('click', function() {
      let item = section.querySelector(selector.action);
      let display = item.style.display;
      item.style.display = display === 'block' ? 'none' : 'block';
    });
  });
})();

function addActionListener() {
  const SELECTOR_LIST = [
    {
      id: '#copyAsMd',
      file: './inject/copy-as-md.js'
    },
    {
      id: '#copyAsJson',
      script: './inject/copy-as-json.js',
    },
    {
      id: '#copyAsHtml',
      file: './inject/copy-as-html.js',
      close: false
    },
    {
      id: '#copyAsText',
      file: './inject/copy-as-text.js'
    },
    {
      id: '#generate',
      file: './inject/generate.js'
    },
    {
      id: '#autoRead',
      file: './inject/auto-read.js'
    }
  ];
  
  SELECTOR_LIST.forEach(function(selector) {
    let elem = document.querySelector(selector.id);
    elem && elem.addEventListener('click', function() {
      chrome.tabs.executeScript({
        file: selector.file
      }, function(data) {
        window.close();
      });
    });
  });
};

if (typeof window.__myy__wereader === 'undefined') {
  addActionListener();
  window.__myy__wereader = true;
}

