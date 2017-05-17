'use strict';

const searchDB = require('../helpers/search');


exports.index = {
  handler: function(req, res) {
    return res({code:0, msg:'Go to https://saraileon.github.io/mexico-zipcodes/ for directions'});
  }
};


exports.getData = {
  handler: function(req, res) {
    let   searchType = String(req.params.type);
    const searchStr  = String(req.params.search);
    let page         = req.query.page;
    let limit        = req.query.limit;

    const getData = ( type, searchType ) => {
      const searchData = new searchDB();
      const search     = searchData.search(type, searchType, searchStr, page, limit);

      search.then(() => {
        return res(search);
      })
      .catch((e) => {
        return res({ statusCode: 500, error: 'Internal Server Error', message: 'An internal server error occurred', data: e });
      });
    };

    switch( searchType ) {
      case 'zipcode':
        getData('normal', searchType);
        break
      case 'zone':
        searchType = 'zone_type'
        getData('regex', searchType);
        break
      case 'state':
      case 'colony':
      case 'municipality':
        getData('regex', searchType);
        break
      default:
        return res({ statusCode: 400, error: 'Bad Request', message: 'invalid query' });
    };
  }
};
