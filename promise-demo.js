

function hello() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve('world');
    }, 1000);
  });
};


async function main() {
  const res = await hello();
  console.log(res);
}

main();