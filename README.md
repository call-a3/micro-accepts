# micro-accepts

[![NPM](https://img.shields.io/npm/v/micro-accepts.svg)](https://www.npmjs.com/package/micro-accepts)
[![Travis](https://img.shields.io/travis/call-a3/micro-accepts.svg)](https://travis-ci.com/call-a3/micro-accepts)
[![Codecov](https://img.shields.io/codecov/c/github/call-a3/micro-accepts.svg)](https://codecov.io/gh/call-a3/micro-accepts)
[![Greenkeeper badge](https://badges.greenkeeper.io/call-a3/micro-accepts.svg)](https://greenkeeper.io/)
[![David](https://img.shields.io/david/call-a3/micro-accepts.svg)](https://david-dm.org/call-a3/micro-accepts)
[![David Dev](https://img.shields.io/david/dev/call-a3/micro-accepts.svg)](https://david-dm.org/call-a3/micro-accepts?type=dev)

[micro](https://www.npmjs.com/package/micro) decorator to vary request handling based on the Accept header of the request.

## Installing

```bash
# npm
npm install -s micro-accepts

# yarn
yarn add micro-accepts
```

## Usage

```js
import accepts from 'micro-accepts'

export default accepts({
  async json(req, res) {
    // this method will handle requests that prefer json
  },
  async ['application/xml+custom'](req, res) {
    // this method will handle requests that prefer application/xml+custom
  },
  async text(req, res) {
    // this method will handle requests that accept text. This is also the default if no more specific types are accepted
  },
})
```
