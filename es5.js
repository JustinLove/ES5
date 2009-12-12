(function(es5) {

function assertObject(o) {
  if (typeof(o) == 'object' || typeof(o) == 'function') {
    return o;
  } else {
    throw new TypeError();
  }
}

function assertCallable(o) {
  if (typeof(o) == 'function') {
    return o;
  } else {
    throw new TypeError();
  }
}

function stub(o) {
  return assertObject(o);
}

es5.Object = {
  getPrototypeOf: function(o) {
    return assertObject(o).__proto__;
  },
  getOwnPropertyDescriptor: function(o, p) {
    assertObject(o);
    return {
      value: o[p],
      writeable: true,
      enumerable: true, // possibly improved, but expensive
      configurable: true
    };
  },
  getOwnPropertyNames: function(o) {
    assertObject(o);
    var array = [];
    for (var i in o) { 
      if (o.hasOwnProperty(i)) {
        array.push(i);
      }
    }
    return array;
  },
  create: function(o, properties) {
    if (o) {
      function F() {};
      F.prototype = assertObject(o);
      return es5.Object.defineProperties(new F(), properties);
    } else {
      return es5.Object.defineProperties({}, properties);
    }
  },
  defineProperty: function(o, p, attributes) {
    assertObject(o);
    o[p] = attributes && attributes.value;
    return o;
  },
  defineProperties: function(o, properties) {
    assertObject(o);
    for (var i in properties) { 
      if (properties.hasOwnProperty(i)) {
        o[i] = properties[i] && properties[i].value;
      }
    }
    return o;
  },
  seal: stub,
  freeze: stub,
  preventExtensions: stub,
  isSealed: function(o) {assertObject(o); return false;},
  isFrozen: function(o) {assertObject(o); return false;},
  isExtensible: function(o) {assertObject(o); return true;},
  keys: function(o) {
    assertObject(o);
    var array = [];
    for (var i in o) { 
      array.push(i);
    }
    return array;
  }
};

if (!Object.__proto__) {
  delete es5.Object.getPrototypeOf;
}

es5.Function = {
  prototype: {
    bind: function(thisArg) {
      var target = assertCallable(this);
      var boundArgs = Array.prototype.slice.call(arguments, 1);
      var n = Math.min(5, Math.max(0, (target.length - boundArgs.length)));
      // ugly, but length isn't writeable, so it's this or eval
      return [
        function() {
          return target.apply(thisArg,
            Array.prototype.concat.apply(boundArgs, arguments));
        },
        function(a) {
          return target.apply(thisArg,
            Array.prototype.concat.apply(boundArgs, arguments));
        },
        function(a, b) {
          return target.apply(thisArg,
            Array.prototype.concat.apply(boundArgs, arguments));
        },
        function(a, b, c) {
          return target.apply(thisArg,
            Array.prototype.concat.apply(boundArgs, arguments));
        },
        function(a, b, c, d) {
          return target.apply(thisArg,
            Array.prototype.concat.apply(boundArgs, arguments));
        },
        function(a, b, c, d, e) {
          return target.apply(thisArg,
            Array.prototype.concat.apply(boundArgs, arguments));
        }
      ][n];
    }
  }
};

es5.Array = {
  isArray: function(arg) {
    return arg && // null is an object...
      typeof(arg) == 'object' && 
      'constructor' in arg &&
      arg.constructor === Array;
  },
  prototype: {
    indexOf: null,
    lastIndexOf: null,
    every: null,
    some: null,
    forEach: null,
    map: null,
    filter: null,
    reduce: null,
    reduceRight: null
  }
};

es5.String = {
  prototype: {
    trim: null
  }
};

es5.Date = {
  now: null,
  prototype: {
    toISOString: null,
    toJSON: null
  }
};

})(this.exports = this.exports || {});