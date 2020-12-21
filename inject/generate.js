var noteList = document.querySelector('.readerNoteList');
var title = document.title;
if (!noteList) {
  // 
}


chrome.runtime.sendMessage({
  type: 'generate',
  data: noteList
})



console.log(noteList)