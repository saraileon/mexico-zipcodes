'use strict';

let Boom     = require('boom'),
    Zipcode  = require('../model/zipcode').Zipcode,
    mongoose = require('mongoose');


exports.index = {
  handler: function(req, res) {
    return res({ code: 500, msg: 'Bad Request' });
  }
};

exports.getState = {
  handler: function(req, res) {
    const state = String(req.params.state);
    let page    = req.query.page;
    let limit   = req.query.limit;
    let data    = {};
    let total   = 0;

    if(typeof page !== 'undefined' && typeof limit !== 'undefined'){
      page  = parseInt(page);
      limit = parseInt(limit);

      Zipcode.count({ 'state': new RegExp(state, 'i') }).exec()
      .catch((e) => {
        return res(Boom.badImplementation(err));
      })
      .then((count) => {
        total = count;
      })
      .then(() => {
        Zipcode.find({ 'state': new RegExp(state, 'i') }).skip(page-1).limit(limit).exec()
        .catch((e) => {
          return res(Boom.badImplementation(err));
        })
        .then((rows) => {
          data.data  = rows;
          data.total = total;
          data.limit = limit;
          data.page  = page;
          data.pages = Math.ceil(total/limit);
        })
        .then(() => {
          return res(data);
        });
      });

    }else{
      Zipcode.find({ 'state': new RegExp(state, 'i') }).exec(function(err,data){
        if (err) { return res(Boom.badImplementation(err)) }
        return res(data);
      });
    }
  }
};



