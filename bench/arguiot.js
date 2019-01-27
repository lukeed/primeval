// Authored: Arthur Guiot (@arguiot)
// Refactored: Luke Edwards (@lukeed)
// @see https://github.com/lukeed/primeval/pull/2#issuecomment-457814536

module.exports = function (num) {
	if (num < 2 || num * 0 !== 0) {
		return false;
	}

	var i=0, j, sqrt, arr=[2, 3, 5];

	for (; i < arr.length; i++) {
		if (num === arr[i]) return true;
		if (num % arr[i] === 0) return false;
	}

	arr = [0, 4, 6, 10, 12, 16, 22, 24];
	sqrt = Math.sqrt(num);

	for (i=7; i <= sqrt; i += 30) {
		for (j=0; j < arr.length; j++) {
			if (num % (i + arr[j]) === 0) {
				return false;
			}
		}
	}

	return true;
}
