var api_key = 'fc12dbe520b23a04d857aff541636172 ';
var domain = 'https://api.mailgun.net/v3/sandbox02b86dc0b3ec470c837e36d187e72326.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var pubnub = require('./config/pubnub.js');

// Subscribe to the demo_tutorial channel
pubnub.subscribe({
    channel: 'create_contact_event',
    message: function(m){console.log('Send email to '+JSON.parse(m).email);
    		var data = {
  			from: 'WIT BSc IT <me@wit.ie',
  			to: JSON.parse(m).email,
  			subject: 'Welcome',
  			text: 'Welcome to the new mailing system'
			};
 
		mailgun.messages().send(data, function (error, body) {
  		console.log(body);
		});
	}
});

 
