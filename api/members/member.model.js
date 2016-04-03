'use strict';
var validator = require("email-validator");
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MemberSchema = new Schema({
  name: String,
  address: String,
  contactno: String,
  email: String,
  age: { type: Number, min: 0, max: 120 },
  membertype: String,
  feespaid: String,
  updated: { type: Date, default: Date.now }
});



MemberSchema.path('address').validate(function (v) {
	
	if(v.length>50 || v.length <5){
		return false
	}
   return true
},'contact address should be between 5 and 40 characters');


MemberSchema.path('age').validate(function (a) {
	
	if(a>65 || v<5){
		return false
	}
   return true
},'membership age must be between 5 and 65');


MemberSchema.path('email').validate(function (v) {
	
	return validator.validate(v);
	
	
},'you must enter a valid email');





module.exports = mongoose.model('Member', MemberSchema);