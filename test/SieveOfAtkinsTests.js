var expect = require('chai').expect;
var SieveOfAtkins = require('../lib/SieveOfAtkins');

describe("SieveOfAtkins", function() {

	describe('primeList', function() {

		it('should display the first 7 primes for n = 20', function() {
			var n = 20;
			var validPrimes = [2, 3, 5, 7, 11, 13, 17, 19];

			var primes = SieveOfAtkins.primeList(n);

			expect(primes).to.equal(validPrimes);

		});

	});

});