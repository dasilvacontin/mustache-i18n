/*
 * mustache-i18n
 *
 * Copyright (c) 2015 David da Silva
 * Licensed under the MIT license.
 */

'use strict'

var dict
var _lookup

var i18n = module.exports = function (mustache) {
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

