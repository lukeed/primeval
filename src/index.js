export default function (num) {
	if (num * 0 !== 0) return false;

	if (num <= 3) return num > 1;
	if (num % 2 === 0 || num % 3 === 0) return false;

	for (var i = 5; i * i <= num; i += 6) {
		if (num % i === 0 || num % (i + 2) === 0) {
			return false
		}
	}

	return true;
}
