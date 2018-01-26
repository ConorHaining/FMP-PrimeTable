var expect = require('chai').expect;
var input = require('../lib/input');

describe("Input", function() {

	describe('argCount', function() {
		
		it('should be no more than 3 values', function(){
			var argv = [
				'/usr/bin/node',
				'/path/to/file.js',
				'3'
			];

			var results = input.argCount(argv);

			expect(results).to.equal(3);
		});

	});

});