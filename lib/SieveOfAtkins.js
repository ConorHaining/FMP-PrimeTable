module.exports = {

	/**
	 * @see https://en.wikipedia.org/wiki/Sieve_of_Atkin#Algorithm
	 */
	primeList(limit) {
		// 1. Create a results list filled with 2,3 & 5

		// 2. Create a sieve list with an entry for length n, initially marked as false

		// 3. For each entry number in the sieve:

			/** 3.1
			 *	Mark sieve[n] true if 
			 *	 n = 4xx + yy has odd number of solutions
			 *	 n % 12 = 1 or n % 12 = 5
			 */

			 /** 3.2
			 *	Mark sieve[n] true if
			 *	 n = 3xx + yy has odd number of solutions
			 *	 n % 12 = 7
			 */

			 /** 3.3
			 *	Mark sieve[n] true if
			 *	 n = 3xx - yy has odd number of solutions
			 *	 x > y and n % 12 = 11
			 */

		// 4. Mark all multiplles of squares as non prime

		// 5. Add primes to the results list

	}

}