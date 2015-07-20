# mustache-sql [![Build Status](https://travis-ci.org/hden/socketio-wildcard.svg?branch=master)](https://travis-ci.org/hden/socketio-wildcard)
hipster-style SQL template

## install

    npm install --save mustache-sql

## example

```js
let render = require('mustache-sql')
let template = 'UPDATE foobar SET {{property}} WHERE id = {{id}}'
let parameter = { id: 1, property: { foo: 'bar', num: 3.14 } }
render(template, parameter)
// UPDATE foobar SET `foo` = 'bar', `num` = 3.14 WHERE id = 1
```

## features

* `{{valu}}` and `{{{key}}}` are escaped by [node-mysql](https://github.com/felixge/node-mysql)
* partials
