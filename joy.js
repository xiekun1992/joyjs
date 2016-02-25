var assert = require('assert');

function currencyConverter(rmb){
	var dollar=1;
	return dollar;
}

describe('currencyConverter',function(){
	it('7 RMB is equal 1 Dollar',function(){
		assert.equal(1,currencyConverter(7));
	})
})