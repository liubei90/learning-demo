/*
function makeIterator() {
  var i = 0;
  return {
    next: function() {
      return {
        value: i++,
        done: i > 100 ? true : false
      }
    }
  }
}

var it = makeIterator();

var res = it.next();
while (!res.done) {
  console.log(res.value);
  res = it.next();
}
*/



/*
function MyArray(arr) {
  this.arr = arr;
}

MyArray.prototype[Symbol.iterator] = function() {
  var arr = this.arr;
  var index = 0;
  return {
    next: function() {
      var isDone = arr.length <= index;
      return {
        value: isDone ? undefined : arr[index++],
        done: isDone
      }
    }
  }
}

var myArr = new MyArray([1, 2, 3, 4, 5]);

var it = myArr[Symbol.iterator]();
console.log(it.next());

for (value of myArr) {
  console.log(value);
}

var newArr = [...myArr];
console.log(newArr);
*/


/*
function asyncGetData() {
  return new Promise(function (resolve) {
    setTimeout(function() {
      resolve(1);
    }, 3000);
  });
}

var showLoading = false;

function * loadUI() {
  showLoading = true;
  yield asyncGetData();
  showLoading = false;
}

var loadui = loadUI();

loadui.next().value.then(function() {
  loadui.next();
  console.log(showLoading);  
});
console.log(showLoading);
*/



/*
function runAsyncFun(g, data) {
  var n = g.next(data);
  if (!n.done && n.value.then) {
    n.value.then(function(res) {
      runAsyncFun(g, res);
    });
  }
}

function getUserBaseData() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(1);
    }, 1000);
  });
}
function getUserProfileData() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(2);
    }, 1000);
  });
}
var userDetail = [];
function * getUserDetail() {
  var base = yield getUserBaseData();
  userDetail.push(base);
  var profile = yield getUserProfileData();
  userDetail.push(profile);
  console.log(userDetail);
}

runAsyncFun(getUserDetail());
*/
