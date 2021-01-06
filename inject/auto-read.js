;(function() {
  // bad case
  const doc = document.documentElement;
  doc.style.scrollBehavior = 'smooth';
  let step = 1;
  function scroll() {
    doc.scrollTop += step;
    window.requestAnimationFrame(scroll);
  }
  
  window.requestAnimationFrame(scroll);
})();