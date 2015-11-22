
var chai = require('chai'),
	expect = chai.expect,
	validator = require('../lib/validator');


describe('A validator', function(){

		context('Given the number is not a positive', function(){

		it('returns "error.nonpositive" for strict non-positive numbers, like -2', function(){
			expect(validator(-2)).to.include('error.nonpositive');
		});

		it('returns "error.nonpositive" for strict non-positive numbers, like 0', function(){
			expect(validator(0)).to.include('error.nonpositive');	
		});
		});

		context('Given the number is divisible by three', function(){
		
		it('like 3', function(){
			expect(validator(3)).to.include('error.three');
		});
		it('like 15', function(){
			expect(validator(15)).to.include('error.three');
		})


		});
	

		context('Given the number is divisible by five', function() {
		
		it('like 5', function(){
			expect(validator(5)).to.include('error.five');
		});
		it('like 15', function(){
			expect(validator(15)).to.include('error.five');
		})
		});


});