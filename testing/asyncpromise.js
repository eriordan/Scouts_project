var Q = require('q');

describe('our test suite', function ()
{
	it('this should pass', function()
	{
		return Q.when('pass');
	});

	it('this should fail', function()
	{
		return Q.reject(new Error('fail'));
	});
	
});

/* Instead of using a 'done' argument, I can return a promise from the test or any other hooks.
Mocha waits until the promise settles. If it gets fulfilled, the test or hook have succeeded.
If it is rejected the test or hook have failed*/