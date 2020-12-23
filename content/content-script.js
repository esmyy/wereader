var SELECTOR_NAME = {
  notesWrapper: '.readerNoteList',
  noteItem: '.sectionListItem',
  noteTitle: '.sectionListItem_title',
  noteContent: '.sectionListItem_content',
  noteText: '.text',
}

var _global = typeof window === 'object' && window.window === window
  ? window : typeof self === 'object' && self.self === self
  ? self : typeof global === 'object' && global.global === global
  ? global
  : this

_global.SELECTOR_NAME = SELECTOR_NAME.SELECTOR_NAME || SELECTOR_NAME

if (typeof module !== 'undefined') {
  module.exports = SELECTOR_NAME;
}

if (typeof window !== 'undefined') {
  window.SELECTOR_NAME = SELECTOR_NAME
}
