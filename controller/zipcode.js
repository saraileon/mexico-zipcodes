'use strict';

let Boom     = require('boom'),
    Zipcode  = require('../model/zipcode').Zipcode,
    mongoose = require('mongoose');


exports.index = {
  handler: function(req, res) {
    return res({ code: 500, msg: 'Bad Request' });
  }
};

exports.getZipcode = {
  handler: function(req, res) {
    const zipcode = String(req.params.zipcode);

    Zipcode.find({ $or: [{ 'zipcode': zipcode }, { 'colony': zipcode }] }, function(err, data) {
      if (!err) {
        return res(data);
      }
      return res(Boom.badImplementation(err)); // 500 error
    });
  }
};

