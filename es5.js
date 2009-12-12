// King Arthur: One, two, five!
// Sir Galahad: Three sir!
// King Arthur: THREE!
//  - Monty Python and the Holy Grail

(function(es5) {

function assertObject(o) {
  if (typeof(o) == 'object' || typeof(o) == 'function') {
    return o;
  } else {
    throw new TypeError();
  }
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
  getOwnPropertyNames: null,
  create: null,
  defineProperty: null,
  defineProperties: null,
  seal: null,
  freeze: null,
  preventExtensions: null,
  isSealed: null,
  isFrozen: null,
  isExtensible: null,
  keys: null
};

if (!Object.__proto__) {
  delete es5.Object.getPrototypeOf;
}

es5.Function = {
  prototype: {
    bind: null
  }
};

es5.Array = {
  isArray: null,
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