console.log('html')

var colorList = [
  {
    background: '#c7edcc',
    color: '#0d141e'
  },
  {
    background: '#f1e5c9',
    color: '#0d141e'
  },
  {
    background: '#1e2022',
    color:'#d0d3d8'
  },
  {
    background: '#ffffff',
    color: '#0d141e'
  },
  {
    background: '#1e2022',
    color: '#f1e5c9'
  },
  {
    background: '#f5da55',
    color: '#000000'
  },
  {
    background: '#558b2f',
    color: '#ffffff'
  },
  {
    background: '#fdf6e3',
    color: '#b58900'
  },
  {
    background: '#1b95e0',
    color: '#ffffff'
  }
];


function addColorList() {
  var flag = document.createDocumentFragment('');
  var listWrapper = document.querySelector('#colorList');
  colorList.forEach(function(item) {
    var el = document.createElement('div');
    var input = document.createElement('input');
    var span = document.createElement('span');
    span.innerHTML = '字体颜色';
    input.value = JSON.stringify(item);
    input.type = 'checkbox';
    el.classList.add('color');
    el.style = JSON.stringify(item).replace(/,/g, ';').replace(/[{}]/g, '').replace(/"/g, '');
    el.appendChild(span);
    el.appendChild(input);
    flag.appendChild(el);
  });

  listWrapper.appendChild(flag);
}

addColorList();
var colorListId = '#colorList'
var colorListWrapper = document.querySelector(colorListId);
var checkBoxList = colorListWrapper.querySelectorAll('input');
var color = {};

checkBoxList.forEach(function(element) {
  element.addEventListener('change', handleCheckColor, false);
})


function handleCheckColor(event) {
  var value = event.target.value;
  color = JSON.parse(value);
  checkBoxList.forEach(function(element) {
    if (element.value !== value) {
      element.checked = false;
    }
  });
}

html2canvas(document.querySelector("#capture")).then(canvas => {
  document.body.appendChild(canvas)
});

