const test = require('tape');
const fn = require('../dist/primeval');

test('exports', t => {
	t.is(typeof fn, 'function', 'exports a function');
	t.end();
});

test('non-numbers', t => {
	t.false(fn(), '(false) ~> undefined');
	t.false(fn('foo'), '(false) ~> string');
	t.false(fn(null), '(false) ~> null');
	t.false(fn(NaN), '(false) ~> NaN');
	t.false(fn(''), '(false) ~> ""');
	t.end();
});

test('primes', t => {
	[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]
		.forEach(val => {
			t.true(fn(val), `(true) ~> ${val}`);
		});
	t.end();
});

test('not primes', t => {
	const reddit = 6 * 1002861;
	[-1, 0, 1, 4, 6, 8, 10, 14, 15, 25, 30, 77, 100, 625, 932, 19683, reddit, reddit + 1, reddit - 1].forEach(val => {
		t.false(fn(val), `(false) ~> ${val}`);
	});
	t.end();
});

test('carmichael numbers', t => {
	[561, 1105, 1729, 2465, 2821, 6601, 8911, 41041, 825265, 321197185, 5394826801].forEach(val => {
		t.false(fn(val), `(false) ~> ${val}`);
	});
	t.end();
});
