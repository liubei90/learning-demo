setTimeout(function() {
  console.log(1);
}, 0);

setImmediate(function() {
  console.log(2);
}, 0);

process.nextTick(function() {
  console.log(3);
});

Promise.resolve().then(function() {
  console.log(4);
});

(function() {
  console.log(5);
})()

var trr = [];
function t() {
  console.log(trr);
  trr = [];
  setTimeout(function() {
    trr.push(1);
    // console.log(1);
  });
  setImmediate(function() {
    trr.push(2);
    // console.log(2);
  });

  setTimeout(t, 100);
}

t();