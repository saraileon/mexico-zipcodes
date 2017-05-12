'use strict';

let Boom     = require('boom'),
    Zipcode  = require('../model/zipcode').Zipcode,
    mongoose = require('mongoose');


exports.index = {
  handler: function(req, res) {
    return res({code:0, msg:'Go to https://saraileon.github.io/mexico-zipcodes/ for directions'});
  }{}
};

