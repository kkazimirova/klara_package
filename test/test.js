const assert = require('assert')
const h = require("../src/index.js");

describe('Testing hello function', function() {
	it('Hello Jack', function() {
	    assert.equal(h.hello('Jack'), 'Hello Jack')
	})
})