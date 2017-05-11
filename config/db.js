'use strict';

const chalk    = require('chalk');
let   Mongoose = require('mongoose'),
      config   = require('./config');

const connectUrl = 'mongodb://' + config.database.username + ':' + config.database.password + '@' + config.database.host + ':' + config.database.port + '/' + config.database.db;

Mongoose.Promise = global.Promise;
Mongoose.connect(connectUrl);

let db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log(chalk.black.bgGreen.bold(`Connection with database ${config.database.db} succeeded   `));
  console.log(chalk.black.bgGreen.bold('-----------------------------------------------------'));
});

exports.Mongoose = Mongoose;
exports.db = db;

