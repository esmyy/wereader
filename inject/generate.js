var SELECTOR_NAME = {
  notesWrapper: ".readerNoteList",
  noteItem: ".sectionListItem",
  noteTitle: ".sectionListItem_title",
  noteContent: ".sectionListItem_content",
  noteText: ".text",
};

// 截图空白问题尚未解决
var wrapper = document.querySelector(SELECTOR_NAME.notesWrapper);
var title = document.title;
if (wrapper) {
  wrapper.style = "position:absolute";
  try {
    // DOM是不允许传递到background处理的
    html2canvas(wrapper, {
      x: wrapper.offsetLeft,
      y: wrapper.offsetTop,
      width: wrapper.scrollWidth,
      height: wrapper.scrollHeight,
      windowWidth: window.screen.availWidth,
      windowHeigth: window.screen.availHeight,
    }).then(function (canvas) {
      document.body.appendChild(canvas);
      canvas.toBlob(function (blob) {
        saveAs(blob, "pretty image.png");
      });
    });
  } catch (e) {
    // alert
  }
}
