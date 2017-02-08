# router4koa

## Installation

```bash
$ npm install --save router4koa
```

## Example

```js
var router = require('router4koa')(opts);
router.get(...);
router.post(...);

...
var koa = require('koa');
var app = koa();
app.use(router.routes());
```
