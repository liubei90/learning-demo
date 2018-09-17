// function getPromise(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('id:', id);
//       resolve(id);
//     }, 1000);
//   });
// }

// var mainPromise;
// for (var i = 0; i < 5; i++) {
//   if (!mainPromise) {
//     mainPromise = getPromise(i);
//   } else {
//     mainPromise = mainPromise.then(() => {
//       return getPromise(i);
//     });
//   }
// }

// // 
// new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(1);
// })
// .then(() => {
//   console.log('then 1');
//   return new Promise((resolve, reject) => {
//     console.log(2);
//     resolve(2);
//   });
// })
// .then(() => {
//   console.log('then 2');
//   return new Promise((resolve, reject) => {
//     console.log(3);
//     resolve(3);
//   });
// })
// .then(() => {
//   console.log('then 3');
//   return new Promise((resolve, reject) => {
//     console.log(4);
//     resolve(4);
//   });
// });


// // p1 p2 p3 p4并不相等
// var p2, p3, p4;
// var p1 = new Promise((resolve, reject) => {
//   resolve();
// })

// p2 = p1.then(() => {
//   p3 = new Promise((resolve, reject) => {
//     resolve();
//   });
//   return p3;
// });

// p4 = p2.then(() => {
//   console.log(p3, p4);
//   console.log('p3 == p4', p3 == p4);
// });

// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p1 == p2, p1 == p3, p2 == p3);

// setTimeout(() => {
//   console.log(p3);
//   console.log(p1 == p2, p1 == p3, p2 == p3);
// }, 0);


// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject();
//   }, 2000);
// }).then(() => {
//   return Promise.resolve();
// }, () => {
//   return Promise.reject('123123');
// }).then(() => {
//   console.log('1');
// }, () => {
//   console.log('2');
// }).catch((e) => {
//   console.log('catch', e);
// });

setTimeout(function() {
  console.log(1);
}, 0);

Promise.resolve().then(function() {
  console.log(2);
});