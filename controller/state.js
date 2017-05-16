'use strict';

const searchDB = require('../helpers/search');


exports.index = {
  handler: function(req, res) {
    return res({ code: 500, msg: 'Bad Request' });
  }
};

exports.getState = {
  handler: function(req, res) {
    const searchData = new searchDB();
    const state      = String(req.params.state);
    let page         = req.query.page;
    let limit        = req.query.limit;

    const search = searchData.search('regex', 'state', state, page, limit);
    search.then(() => {
      return res(search);
    })
    .catch((e) => {
      return res({error:e})
    });
  }
};



