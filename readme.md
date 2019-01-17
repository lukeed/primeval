# primeval [![Build Status](https://travis-ci.org/lukeed/primeval.svg?branch=master)](https://travis-ci.org/lukeed/primeval)

> A tiny (200B) utility to check if a value is a prime number via the AKS Primality test

A JavaScript implementation of the [Agrawal–Kayal–Saxena ("AKS") Primality Test](https://en.wikipedia.org/wiki/AKS_primality_test), which is the first primality-proving deterministic algorithm.

---

#### WARNING

While AKS is always correct, it's also _incredibly_ slow... ***especially*** for large numbers!

This version of `primeval` is primarily educational &mdash; you should not use this in real applications.<br>That said, to run this, you will need Node 10.8+ or access to a modern browser that includes [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) support.

It's very likely that there will be future, major versions of `primeval` that will depart from AKS and employ faster (but _probablistic_) algorithms; like [Fermat's little theorem](https://en.wikipedia.org/wiki/Fermat%27s_little_theorem), for example.

---

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
