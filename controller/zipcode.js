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
    const page = String(req.query.page);
    const limit = String(req.query.limit);


    Zipcode.find({ $or: [{ 'zipcode': zipcode }, { 'colony': zipcode }] }).exec(function(err,data){
      if (err) { return res(Boom.badImplementation(err)) }
      return res(data);
    });
  }
};


