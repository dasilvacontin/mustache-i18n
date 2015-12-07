/*
 * mustache-i18n
 *
 * Copyright (c) 2015 David da Silva
 * Licensed under the MIT license.
 */
(function (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    global.i18n = {};
    factory(i18n); // script, wsh, asp
  }
}(this, function(exports){

  'use strict'

  var dict
  var _lookup

  var i18n = function (mustache) {
    var Context = mustache.Context
    _lookup = Context.prototype.lookup
    Context.prototype.lookup = function i18nLookup (name) {
      return (name === 'i18n' ? i18n.lambda : _lookup.apply(this, arguments))
    }
    return i18n
  }

  i18n.lambda = function i18nLambda (text, render) {
    if (!dict) throw new Error('i18n dict was not set up, do `i18n.use(dict)`.')
    text = dict[text] || text
    return render(text)
  }

  i18n.use = function setUpDict (newDict) {
    if (!_lookup) {
      throw new Error('i18n was not properly set up, pass in `Mustache`:\n' +
        '```js\n' +
        'var Mustache = require(\'mustache\')\n' +
        'var i18n = require(\'mustache-i18n\')(Mustache)\n' +
        '```')
    }
    dict = newDict
  }

  exports = i18n;
  return i18n;

}));


