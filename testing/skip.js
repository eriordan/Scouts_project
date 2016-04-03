var assert = require("assert");

describe('first', function()
{
	it('test 1', function()
	{
	});
});

describe.skip('second', function()
{
	it('test 1', function()
	{
	});
});

describe('third', function()
{
	it('test 1', function()
	{
	});
});


/*The skip can be used when I want to exclude some tests from running.
Skip can be used on as many describe/it calls as I like.
It works better than commenting out code as I may forget to uncomment the code.*/