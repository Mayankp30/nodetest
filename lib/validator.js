module.exports = function(n){
	var results = [];

 	




	if(n <= 0) {
		results.push('error.nonpositive');
	}
 	 if (n%3 == 0 ){
		results.push('error.three');
	}
	 if (n%5 == 0 ){
		results.push('error.five')
	}

	return results;
}





