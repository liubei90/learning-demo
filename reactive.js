function parsePath(path) {
  return function() {
    ;
  }
}

function Watcher(target, key, cb, value) {
  this.target = target;
  this.key = key;
  this.cb = cb;
  this.value = value;
  return this;
}

Watcher.prototype.get = function() {
  let value;

  value = this.target[this.key];

  return value;
}

Watcher.prototype.update = function() {
  var value = this.get();
  var oldValue = this.value;

  this.value = value;
  this.cb.call(this.target, value, oldValue);
}


function Dep(watcher) {
  this.watcher = watcher;
  return this;
}

Dep.prototype.depend = function() {
  console.log('depend');
}

Dep.prototype.notify = function() {
  console.log('notify');

  this.watcher.update();
}


function defineReactive(obj, key, val) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj,  key);

  if(property && property.configurable === false) return;

  console.dir(property);

  var getter = property.get;
  var setter = property.set;

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      var value = getter ? getter.call(obj) : val;

      dep.depend();
      return value;
    },
    set: function(v) {
      var value = getter ? getter.call(obj) : val;

      if(value === v || (v !== v && value !== value)) {
        return;
      }

      if(setter) {
        setter.call(obj, v)
      } else {
        val = v;
      }

      dep.notify();
    }
  })
}