# primeval [![Build Status](https://travis-ci.org/lukeed/primeval.svg?branch=master)](https://travis-ci.org/lukeed/primeval)

> A tiny (128B) utility to check if a value is a prime number

Based on the "multiples of six" approach – [check this out](https://t5k.org/notes/faq/six.html) for a quick explanation.

As of `3.0.0`, `primeval` is [extremely quick](#benchmarks) and actually usable within application settings.

---

#### Priors

* `primeval@2.0.0` – implemented the [Agrawal–Kayal–Saxena ("AKS") Primality Test](https://en.wikipedia.org/wiki/AKS_primality_test)<br>AKS is a _fully_ deterministic primality algorithm, but also incredibly slow.<br>Its primary purpose was educational, so feel [free to explore](https://github.com/lukeed/primeval/tree/v2.0.0)!

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
primeval(null);       //=> false
primeval(NaN);        //=> false
```

## API

### primeval(num)
Returns: `Boolean`

#### num

Type: `Number`

The number that you want to check.

> **Note:** Any non-`Number` type will always return a `false` output.

## Benchmarks

The `arguiot` case is the code provided in [`PR #2`](https://github.com/lukeed/primeval/pull/2) by [@arguiot](https://github.com/arguiot) :bowing_man:

Purposefully excluding `primeval@2.0.0` as it's incredibly slow and not meant for actual use.

```
# Node v10.13.0

# Primes
arguiot   x    875,571 ops/sec ±0.67% (91 runs sampled)
primeval  x  4,589,884 ops/sec ±0.20% (93 runs sampled)

# Not Primes
arguiot   x  18,429,333 ops/sec ±0.24% (95 runs sampled)
primeval  x  45,944,091 ops/sec ±0.18% (96 runs sampled)

# Carmichael Numbers
arguiot   x 10,129,774 ops/sec ±0.41% (97 runs sampled)
primeval  x 35,983,866 ops/sec ±0.24% (98 runs sampled)
```


## License

MIT © [Luke Edwards](https://lukeed.com)
