(function checkHasInjected() {
  const SIGN = "copyAsHtml";
  if (window.__myy_wereader && window.__myy_wereader[SIGN]) {
    // return;
  }

  window.__myy_wereader = window.__myy_wereader || {};
  window.__myy_wereader[SIGN] = true;

  // 后序再统一设置到store
  var SELECTOR_NAME = {
    notesWrapper: ".readerNoteList",
    noteItem: ".sectionListItem",
    noteTitle: ".sectionListItem_title",
    noteContent: ".sectionListItem_content",
    noteText: ".text",
  };

  function noticeBg(message) {
    chrome.runtime.sendMessage(message);
  }

  function normalizeText(text) {
    return text
      .replace(/(^"|"$)/g, "")
      .replace(/(\n|\n\r)/g, "<br />")
      .replace(/<\/p>\s*##/g, "</p><br/>##");
  }

  function copy() {
    var wrapper = document.querySelector(SELECTOR_NAME.notesWrapper);
    if (wrapper) {
      const list = wrapper.querySelectorAll(SELECTOR_NAME.noteItem);
      const len = list.length;
      let mdList = [];
      let i = 0;
      let elem = null;
      let text = "";
      let title = "";
      while (i < len) {
        elem = list[i];
        title = elem.querySelector(SELECTOR_NAME.noteTitle);
        text = elem.querySelector(
          `${SELECTOR_NAME.noteContent} ${SELECTOR_NAME.noteText}`
        );
        title && title.innerHTML && mdList.push(`<h2>${title.innerHTML}</h2>`);
        text &&
          text.innerHTML &&
          mdList.push(
            `<p>${(text.innerHTML || "").replace(/\n/g, "<br />")}</p>`
          );
        i++;
      }

      noticeBg({
        type: "copy-as-html",
        text: normalizeText(JSON.stringify(mdList.join(""))),
      });
    }
  }

  copy();
})();
