var innerElm = document.getElementById('inner');
var clickBtn = document.getElementById('clickBtn');

var obj2 = {
  name: 'foo'
}

defineReactive(obj2, 'name', obj2.name);

// 监听obj2的name属性的变化
var watcher2 = new Watcher(obj2, 'name', function(newval, oldval) {
  console.log('watcher obj2', newval, oldval);
  innerElm.innerHTML += '<br>' + newval
});

clickBtn.addEventListener('click', handlerClick);

function handlerClick() {
  obj2.name = 'random:' + Math.random(100);
}