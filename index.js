// vue核心
/* var obj1 = {
  name: 'job'
};

defineReactive(obj1, 'name', obj1.name);

var obj2 = {
  name: 'foo'
}

defineReactive(obj2, 'name', obj2.name);

var watcher2 = new Watcher(obj2, 'name', function(newval, oldval) {
  console.log('watcher obj2', newval, oldval);
});

var innerElm = document.getElementById('inner');
var clickBtn = document.getElementById('clickBtn');

clickBtn.addEventListener('click', handlerClick);

function handlerClick() {
  // obj1.name = 'random:' + Math.random(100);

  // innerElm.innerHTML = JSON.stringify(obj1);

  obj2.name = 'random:' + Math.random(100);
} */


// promise的onfulfilled函数执行时机
/* new Promise(function(resolve, reject) {
  console.log('promise function')
  setTimeout(function() {
    resolve()
  }, 5000);
}).then(function() {
  console.log('first then')
  setTimeout(function() {
    console.log('first then timeout')
  }, 0)
}).then(function() {
  console.log('second then')
}) */
// 上面的代码输出： 
// promise function
// first then
// second then
// first then timeout


// promise的then()函数返回值
/* new Promise(function(resolve, reject) {
  console.log('promise start');
  setTimeout(function() {
    if(Math.random() > 0.5) {
      resolve('resolve 1');
    } else {
      reject('reject 1');
    }
  }, 2000);
}).then(function(data) {

  console.log('onfulfilled ' + data);
  return 'resolve 2';
}, function(err) {
  console.log('onrejected ' + err);
  return 'reject 2';
}).then(function(data) {

  console.log('onfulfilled ' + data);
  return 'resolve 3';
}, function(err) {
  console.log('onrejected ' + err);
  return 'reject 3';
}) */
// then方法返回一个Promise，而它的行为与then中的回调函数的返回值有关：
// 1. 如果then中的回调函数返回一个值，那么then返回的Promise将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。
// 2. 如果then中的回调函数抛出一个错误，那么then返回的Promise将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。
// 3. 如果then中的回调函数返回一个已经是接受状态的Promise，那么then返回的Promise也会成为接受状态，并且将那个Promise的接受状态的回调函数的参数值作为该被返回的Promise的接受状态回调函数的参数值。
// 4. 如果then中的回调函数返回一个已经是拒绝状态的Promise，那么then返回的Promise也会成为拒绝状态，并且将那个Promise的拒绝状态的回调函数的参数值作为该被返回的Promise的拒绝状态回调函数的参数值。
// 5. 如果then中的回调函数返回一个未定状态（pending）的Promise，那么then返回Promise的状态也是未定的，并且它的终态与那个Promise的终态相同；同时，它变为终态时调用的回调函数参数与那个Promise变为终态时的回调函数的参数是相同的。