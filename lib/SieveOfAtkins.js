module.exports = {

	/**
	 * @see https://en.wikipedia.org/wiki/Sieve_of_Atkin#Algorithm
	 */
	primeList(limit) {
		var sqrtLimit = Math.floor(Math.sqrt(limit));

		// 1. Create a results list filled with 2,3 & 5
		var results = [2, 3, 5];

		// 2. Create a sieve list with an entry for length n, initially marked as false
		var sieve = new Array(limit);
		sieve.fill(false, 0, limit);

		// 3. For each entry number in the sieve:
		for (var x = 0; x <= sqrtLimit; x++) {
			
			for (var y = 0; y <= sqrtLimit; y++) {
				
			/** 3.1
			 *	Mark sieve[n] true if 
			 *	 n = 4xx + yy has odd number of solutions
			 *	 n % 12 = 1 or n % 12 = 5
			 */

			 n = 4 * Math.pow(x, 2) + Math.pow(y, 2);

			 if (n <= limit && (n % 12 == 1 || n % 12 == 5)) {
			 	sieve[n] = true;
			 }

			 /** 3.2
			 *	Mark sieve[n] true if
			 *	 n = 3xx + yy has odd number of solutions
			 *	 n % 12 = 7
			 */

			 n = 3 * Math.pow(x, 2) + Math.pow(y, 2);

			 if (n <= limit && n % 12 == 7) {
			 	sieve[n] = true;
			 }

			 /** 3.3
			 *	Mark sieve[n] true if
			 *	 n = 3xx - yy has odd number of solutions
			 *	 x > y and n % 12 = 11
			 */

			 n = 3 * Math.pow(x, 2) - Math.pow(y, 2);

			 if (n <= limit && (n % 12 == 11) && x > y) {
			 	sieve[n] = true;
			 }

			}

		}

		// 4. Mark all multiples of squares as non prime
		for (var i = 4; i <= sqrtLimit; i++) {

			if (sieve[i]) {
				var x = Math.pow(i, 2);

				for (var j = x; j <= limit; j += i) {
					sieve[j] = false;
				}
			}

		}

		// 5. Add primes to the results list
		for (var i = 7; i <= limit; i++) {
			if (sieve[i]) {
				results.push(i);
			}
		}

		return results;
	}

}