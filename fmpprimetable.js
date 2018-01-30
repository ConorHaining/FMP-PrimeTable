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