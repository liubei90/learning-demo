var obj1 = {
  name: 'job'
};

defineReactive(obj1, 'name', obj1.name);

var innerElm = document.getElementById('inner');
var clickBtn = document.getElementById('clickBtn');

clickBtn.addEventListener('click', handlerClick);

function handlerClick() {
  obj1.name = 'random:' + Math.random(100);

  innerElm.innerHTML = JSON.stringify(obj1);
}

var obj2 = {
  name: 'foo'
}

var watcher2 = new Watcher(obj2, name, function(newval, oldval) {
  console.log('watcher obj2', newval, oldval);
});