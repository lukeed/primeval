export default function (num) {
	return num === 2 || num === 3 || num === 5 || (num > 1 && num % 5 > 0 && num * num % 24 === 1);
}
