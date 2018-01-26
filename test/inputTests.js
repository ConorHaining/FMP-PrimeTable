var expect = require('chai').expect;
var input = require('../lib/input');

describe("Input", function() {

	describe('validArgvCount', function() {
		
		it('should return true for 3 values', function(){
			var argv = [
				'/usr/bin/node',
				'/path/to/file.js',
				'3'
			];

			var results = input.validArgvCount(argv);

			expect(results).to.be.true;
		});

		it('should return false for anything other than 3 values', function(){
			var argv = [
				'/usr/bin/node',
				'/path/to/file.js',
				'foo',
				'bar'
			];

			var results = input.validArgvCount(argv);

			expect(results).to.be.false;
		});

	});

	describe('validInputArg', function() {
		
		it('should return true for a postive integer', function(){

			var int = 3;

			var results = input.validInputArg(int);

			expect(results).to.be.true;

		});

	});

});