const chars = [];
function addChars(array, start, end) {
	for (let c = start; c <= end; c++) array.push(String.fromCodePoint(c));
}

// RFC 6265 4.1.1.
addChars(chars, 0x21, 0x21);
addChars(chars, 0x23, 0x2b);
addChars(chars, 0x2d, 0x3a);
addChars(chars, 0x3c, 0x5b);
addChars(chars, 0x5d, 0x7e)

function randInt(n) {
	return Math.floor(n * Math.random());
}

function toRadix(num, charSet) {
	if (num === 0) return charSet[0];
	const radix = charSet.length;
	let output = ``;
	num = Math.abs(num);
	while (num > 0) {
		const place = num % radix;
		output = charSet[place] + output;
		num = (num - place) / radix;
	}

	return output;
}

module.exports = function(length, charSet = chars) {
	let sid = ``;
	for (let i = 1; i <= length; i++) sid += charSet[randInt(charSet.length)];
	return sid + toRadix(Date.now(), charSet);
};
