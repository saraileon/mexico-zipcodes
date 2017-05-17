'use strict';

const Zipcode  = require('../model/zipcode').Zipcode,
      Promise  = require('bluebird'),
      mongoose = require('mongoose');

module.exports = class searchDB {
  search( searchType, searchCriteria, param, page, limit ) {
    return new Promise((resolve, reject) => {
      let data  = {};
      let total = 0;
      let query = {};

      if( searchType === 'normal' ){
        query[searchCriteria] = param;
      }else{
        query[searchCriteria] = new RegExp(param, 'i');
      }

      if(typeof page !== 'undefined' && typeof limit !== 'undefined'){
        page  = parseInt(page, 10);
        limit = parseInt(limit, 10);

        Zipcode.count(query).exec()
        .catch((e) => {
          return reject(e);
        })
        .then((count) => {
          total = count;
        })
        .then(() => {
          Zipcode.find(query).skip(page-1).limit(limit).exec()
          .catch((e) => {
            return reject(e);
          })
          .then((rows) => {
            data.data  = rows;
            data.total = total;
            data.limit = limit;
            data.page  = page;
            data.pages = Math.ceil(total/limit);
          })
          .then(() => {
            return resolve(data);
          });
        });

      }else{
        Zipcode.find(query).exec()
        .catch((e) => {
          return reject(e);
        })
        .then((data) => {
          return resolve(data);
        });
      }

    });
  }
};
