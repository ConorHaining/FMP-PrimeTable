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

	});

});