const { Suite } = require('benchmark');
const primeval = require('../dist/primeval');
const arguiot = require('./arguiot');

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
const notprimes = [0, 1, 4, 6, 8, 10, 14, 15, 25, 30, 77, 100, 625, 932];
const carmichaels = [561, 1105, 1729, 2465, 2821, 6601, 8911, 41041, 825265, 321197185];

function bench(name) {
	console.log(`\n# ${name}`);
	return new Suite().on('cycle', x => console.log(x.target.toString()));
}


bench('Primes')
	.add('arguiot', () => {
		primes.forEach(arguiot);
	})
	.add('primeval', () => {
		primes.forEach(primeval);
	})
	.run();


bench('Not Primes')
	.add('arguiot', () => {
		notprimes.forEach(arguiot);
	})
	.add('primeval', () => {
		notprimes.forEach(primeval);
	})
	.run();

bench('Carmichael Numbers')
	.add('arguiot', () => {
		carmichaels.forEach(arguiot);
	})
	.add('primeval', () => {
		carmichaels.forEach(primeval);
	})
	.run();
