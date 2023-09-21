const primeNumber = num => {
	if (num <= 1) return false; // prime numbers greater than 1
	if (num <= 3) return true; // 2 and 3 are primes
	if (num % 2 === 0 || num % 3 === 0) return false; // checking if num is a multiple of 2 or 3

	let i = 5;
	while (i * i <= num) { // iteration while i squared <= number
		if (num % i === 0 || num % (i + 2) === 0) return false; // num isn't prime
		i += 6; // for numbers 6k ± 1, where k is an integer
	}

	return true; // num is a prime
};

const simpleNumber = () => {

	const startInputNumber = parseInt(prompt('Enter the start of interval:'));
	const endInputNumber = parseInt(prompt('Enter the end of interval:'));

	if (isNaN(startInputNumber) || isNaN(endInputNumber) || startInputNumber === null || endInputNumber === null || startInputNumber === "" || endInputNumber === "" || startInputNumber > endInputNumber) {
		alert('You entered an incorrect value. Please, try again.'); // error message
		return;
	}

	// correctly entered values is converted into numbers:
	const start = Number(startInputNumber);
	const end = Number(endInputNumber);

	let primeNumbersString = ''; // to store prime numbers as a string

	for (let i = start + 1; i < end; i++) { // iteration within in interval, not inclusive
		if (primeNumber(i)) {
			if (primeNumbersString !== '') {
				primeNumbersString += ', '; // adding a comma if it's not first number
			}
			primeNumbersString += i; // adding a prime number to the string
		}
	}

	console.log(`Prime numbers in interval [${start}, ${end}]: ${primeNumbersString}`);
};

simpleNumber();
