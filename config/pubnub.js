'use strict';

// Mail service configuration
// ===========================
module.exports = require("pubnub").init({
            publish_key : "pub-c-2bd76427-e826-4672-a949-5b67f1c87cd5",
            subscribe_key : "sub-c-74b006be-da0e-11e5-8898-0619f8945a4f"
     });