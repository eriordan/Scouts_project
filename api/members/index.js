'use strict';

var _ = require('lodash');
var Member = require('./member.model');

// Get list of members
exports.index = function(req, res) {
          // Connect to the db
   Member.find(function (err, members) {
    if(err) { return handleError(res, err); }
    return res.json(200, members);
  });

} ;

// Creates a new member in datastore.
exports.create = function(req, res) {
  Member.create(req.body, function(err, member) {
    if(err) { return handleError(res, err); }
    return res.json(201, member);
  });
};

// Updates an existing member in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Member.findById(req.params.id, function (err, member) {
    if (err) { return handleError(res, err); }
    if(!member) { return res.send(404); }
    var updated = _.merge(member, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, member);
    });
  });
};

// delete an existing member in datastore.
exports.delete = function(req, res) {
    Member.findById(req.params.id, function (err, member) {
    if(err) { return handleError(res, err); }
    if(!member) { return res.send(404); }
    member.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
};