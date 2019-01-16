# primeval [![Build Status](https://travis-ci.org/lukeed/primeval.svg?branch=master)](https://travis-ci.org/lukeed/primeval)

> A tiny (77B) utility to check if a value is a prime number

Makes use of a ***very neat trick*** which proves that squaring any prime number, excluding the "sub primes", is always 1 more than a multiple of 24 🤯 &mdash; [watch the video](https://www.youtube.com/watch?v=ZMkIiFs35HQ)!

> All credit goes to [Matt Parker](http://standupmaths.com/) and [Numberphile](https://www.youtube.com/user/numberphile)

This module exposes three module definitions:

* **ES Module**: `dist/primeval.mjs`
* **CommonJS**: `dist/primeval.js`
* **UMD**: `dist/primeval.min.js`

## Install

```
$ npm install --save primeval
```


## Usage

```js
import primeval from 'primeval';

primeval(2);   //=> true
primeval(3);   //=> true
primeval(17);  //=> true
primeval(29);  //=> true
primeval(25);  //=> false
primeval(512); //=> false
primeval(12);  //=> false
primeval(1);   //=> false

primeval("foobar");   //=> false
primeval(100.1231);   //=> false
primeval(null);       //=> false
```

## API

### primeval(num)
Returns: `Boolean`

#### num

Type: `Number`

The number that you want to check.

> **Note:** Any non-`Number` type will always return a `false` output.


## License

MIT © [Luke Edwards](https://lukeed.com)
