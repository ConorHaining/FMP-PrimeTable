var input = require('./lib/input');
var SieveOfAtkins = require('./lib/SieveOfAtkins');

// Get the arguments passed to the process
var argv = process.argv;

// Check for three arguments
if (!input.validArgvCount(argv)) {
	console.log('Please provide only one argument');
	process.exit(1);
}

// Check that a valid argument has been provided
if (!input.validInputArg(argv[2])) {
	console.log('Please provide a positive integer');
	process.exit(1);
}

var primes = SieveOfAtkins.primeList(argv[2]);

for (var r = 0; r < (primes.length + 1); r++) {

	// Add the buffer if on the first row
	if(r == 0) {
		process.stdout.write('_|\t');
	}

	for (var c = 0; c < (primes.length + 1); c++) {

		// Print out primes if on the first row
		if(r == 0 && c != primes.length) {
			process.stdout.write(`\u001B[4m${primes[c]}\t\u001B[24m`);
		} else if (r > 0 && c < primes.length + 1) {

			// Print out prime when in the first column
			if(c == 0) {
				process.stdout.write(primes[r - 1] + '|\t');
			} else {
				var n = primes[r - 1] * primes[c - 1];

				process.stdout.write(n + '\t');
			}

		}

	}

	// Create a new line after each iteration
	process.stdout.write('\n');

}