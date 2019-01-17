export default function (num) {
	if (num < 2) {
		return false;
	}

	var i=0, j=0, int=1, arr = new Array(100);

	// If coefs will exceed `Number.MAX_SAFE_INTEGER`
	//   then we need to use `BigInt` values – Node 10.8+
	if (num >= 57) {
		int = BigInt(int);
		num = BigInt(num);
	}

	// Coefficients
	for (arr[0]=int; i < num; i++) {
		arr[1 + i] = int;

		for (j=i; j > 0; j--) {
			arr[j] = arr[j - 1] - arr[j];
		}

		arr[0] = -arr[0]; // safe: BigInt & Number
	}

	arr[0]++;
	arr[num]--;

	// Return true if all coefficients
	//   were divisible by the target number.
	int -= int; //=> 0 or 0n
	for (i=num; i-- && arr[i] % num === int;);

	return i < 0;
}
