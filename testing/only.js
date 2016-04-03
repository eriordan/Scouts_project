var assert = require("assert");

describe.only('first', function()
{
	it('test 1', function()
	{
	});
});

describe('second', function()
{
	it('test 1', function()
	{
	});
});

/* The describe only function is called when I only want to run one test suite, while working on large sets of specs. 
It forces Mocha to only run one suite.*/