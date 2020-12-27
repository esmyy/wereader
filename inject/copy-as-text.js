// 后序再统一设置到store
var SELECTOR_NAME = {
  notesWrapper: '.readerNoteList',
  noteItem: '.sectionListItem',
  noteTitle: '.sectionListItem_title',
  noteContent: '.sectionListItem_content',
  noteText: '.text',
};

function noticeBg(message){
  chrome.runtime.sendMessage(message);
}

function copyNotes() {
  var wrapper = document.querySelector(SELECTOR_NAME.notesWrapper);
  var title = document.title;
  if (wrapper) {
    var list = wrapper.querySelectorAll(SELECTOR_NAME.noteItem);
    var save_list = [];
    var len = list.length;
    var chapter = null;
    var i = 0;
    while (i < len) {
      var elem = list[i];
      var title = elem.querySelector(SELECTOR_NAME.noteTitle);
      var text = elem.querySelector(`${SELECTOR_NAME.noteContent} ${SELECTOR_NAME.noteText}`);
      if (title) {
        if (chapter) {
          save_list.push({
            ...chapter
          });
        }
        chapter = {
          title: title.innerHTML,
          noteList: []
        }
      }
  
      if (text) {
        chapter.noteList.push({
          text: text.innerHTML
        });
      }
      i++;
    }
  
    console.log('notice copy');
    noticeBg({
      type: 'copy',
      text: JSON.stringify(save_list)
    });
  }
}

copyNotes();