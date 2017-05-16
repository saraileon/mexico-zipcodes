'use strict';

const searchDB = require('../helpers/search');


exports.index = {
  handler: function(req, res) {
    return res({ code: 500, msg: 'Bad Request' });
  }
};

exports.getZipcode = {
  handler: function(req, res) {
    const searchData = new searchDB();
    const zipcode    = String(req.params.zipcode);
    let page         = req.query.page;
    let limit      = req.query.limit;

    const search = searchData.search('normal', 'zipcode', zipcode, page, limit);
    search.then(() => {
      return res(search);
    })
    .catch((e) => {
      return res({error:e})
    });
  }
};


