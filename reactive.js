function parsePath(path) {
  return function() {
    ;
  }
}

function Watcher(target, key, cb) {
  this.target = target;
  this.key = key;
  this.cb = cb;
  this.value = this.get();

  return this;
}

Watcher.prototype.get = function() {
  console.log('watcher get');
  let value;

  pushTarget(this);
  value = this.target[this.key];
  popTarget();

  return value;
}

Watcher.prototype.update = function() {
  var value = this.get();
  var oldValue = this.value;

  this.value = value;
  this.cb.call(this.target, value, oldValue);
}


function Dep() {
  this.subs = [];
  return this;
}

Dep.prototype.depend = function() {
  console.log('depend');
  if(this.subs.indexOf(Dep.target) > -1) return;

  this.subs.push(Dep.target);
}

Dep.prototype.notify = function() {
  console.log('notify');

  var i;
  for(i = 0; i < this.subs.length; i++) {
    this.subs[i].update();
  }
}

Dep.target = null;
var targetStack = [];

function pushTarget(target) {
  console.log('pushTarget');
  if(Dep.target) targetStack.push(Dep.target);

  Dep.target = target;
}

function popTarget() {
  console.log('popTarget');
  Dep.target = targetStack.pop();
}


function defineReactive(obj, key, val) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj,  key);

  if(property && property.configurable === false) return;

  var getter = property.get;
  var setter = property.set;

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      console.log('property get');
      var value = getter ? getter.call(obj) : val;

      if(Dep.target) {
        dep.depend();
      }

      return value;
    },
    set: function(v) {
      console.log('property set');
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