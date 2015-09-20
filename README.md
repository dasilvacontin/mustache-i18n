# mustache-i18n

[![Build Status][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![npm Downloads][downloads-image]][downloads-url]
[![Coverage Status][coveralls-image]][coveralls-url]

i18n plugin for [mustache.js](https://github.com/janl/mustache.js).

## Install

```sh
$ npm install --save mustache-i18n
```

## Usage

```js
var Mustache = require('mustache')
var i18n = require('mustache-i18n')(Mustache)

var tmpl = '{{#i18n}}Hello {{ what }}{{/i18n}}.'
var view = {what: 'World'}

i18n.use({})
Mustache.render(tmpl, view)
// => 'Hello World.'

i18n.use({
  'Hello {{ what }}': 'Hola {{ what }}'
})
Mustache.render(tmpl, view)
// => 'Hola World.'
```

## License

MIT © [David da Silva](http://dasilvacont.in)

[travis-image]: https://travis-ci.org/dasilvacontin/mustache-i18n.svg?branch=master
[travis-url]: https://travis-ci.org/dasilvacontin/mustache-i18n
[npm-image]: https://img.shields.io/npm/v/mustache-i18n.svg?style=flat
[npm-url]: https://npmjs.org/package/mustache-i18n
[downloads-image]: http://img.shields.io/npm/dm/mustache-i18n.svg
[downloads-url]: https://www.npmjs.org/package/mustache-i18n
[coveralls-image]: https://coveralls.io/repos/dasilvacontin/mustache-i18n/badge.svg
[coveralls-url]: https://coveralls.io/r/dasilvacontin/mustache-i18n

