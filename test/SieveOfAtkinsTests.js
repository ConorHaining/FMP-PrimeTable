var expect = require('chai').expect;
var SieveOfAtkins = require('../lib/SieveOfAtkins');

describe("SieveOfAtkins", function() {

	describe('primeList', function() {

		it('should display the first 7 primes for n = 20', function() {
			var n = 20;
			var validPrimes = [2, 3, 5, 7, 11, 13, 17, 19];

			var primes = SieveOfAtkins.primeList(n);

			expect(primes).to.deep.equal(validPrimes);

		});

		it('should display the primes for n = 100', function() {
			var n = 100;
			var validPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

			var primes = SieveOfAtkins.primeList(n);

			expect(primes).to.deep.equal(validPrimes);

		});

	});

});