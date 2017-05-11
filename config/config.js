'use strict';

const argv     = require('optimist').argv;

module.exports = {
  server: {
    host: 'localhost',
    port: argv.port ? argv.port : '1377'
  },
  database: {
  	host: '127.0.0.1',
    port: 27017,
    db: 'mexico_zipcodes1',
    username: '',
    password: '',
    url : 'mongodb://<user>:<password>@<url>'
  },
  lang:{
    en: 'english',
    es: 'spanish'
  }
};
