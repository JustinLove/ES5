(function(es5) {

es5.Object = {
  getPrototypeOf: null,
  getOwnPrototypeDescriptor: null,
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