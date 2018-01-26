module.exports ={

	validArgvCount(argv) {

		if (argv.length == 3) {
			return true
		} else {
			return false;
		}

	},

	validInputArg(n) {

		// Turn the argv string to an integer
		n = parseInt(n);

		// Perform check of the provided value
		if(typeof(n) === 'NaN'){
			return false;
		} else if(n > 0) {
			return true;
		} else {
			return false;
		}

	}	

}