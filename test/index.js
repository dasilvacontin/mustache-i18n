'use strict'

var test = require('tape')
var Mustache = require('mustache')
var i18n = require('../')

test('mustache-i18n', function (t) {
  t.plan(5)

  t.equal(typeof i18n.use, 'function',
    'defines a function for registering a dict')

  t.throws(function () {
    i18n.use({})
  }, /i18n.*not.*set up/, 'should remind people about doing initial set up')
  i18n = i18n(Mustache)

  var tmpl = '{{#i18n}}Hello {{ what }}{{/i18n}}.'
  var view = {what: 'World'}
  t.throws(function () {
    Mustache.render(tmpl, view)
  }, /dict.*not set up/, 'throws if used without having set up a dict')

  i18n.use({})
  t.equal(Mustache.render(tmpl, view), 'Hello World.',
    'it shouldnt alter normal output')

  i18n.use({
    'Hello {{ what }}': 'Hola {{ what }}'
  })
  t.equal(Mustache.render(tmpl, view), 'Hola World.',
    'it should replace strings in the dict')
})

