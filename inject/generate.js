var wrapper = document.querySelector('.readerNoteList');
var title = document.title;
if (wrapper) {
  try {
    html2canvas(wrapper, {
      x: wrapper.offsetLeft, 
      y: wrapper.offsetTop,
      width: wrapper.scrollWidth,
      height: wrapper.scrollHeight,
      windowWidth: window.screen.availWidth,
      windowHeigth: window.screen.availHeight
    }).then(function(canvas) {
      canvas.toBlob(function(blob) {
        saveAs(blob, "pretty image.png");
      });
    });
  } catch (e) {
    // alert
  }
}