'use strict';

const chalk  	 = require('chalk');
let   Mongoose = require('mongoose'),
  	  config 	 = require('./config');

Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://' + config.database.host + '/' + config.database.db);

let db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log( chalk.black.bgGreen.bold(`Connection with database ${config.database.db} succeeded   `) );
  console.log( chalk.black.bgGreen.bold('-----------------------------------------------------') );
});

exports.Mongoose = Mongoose;
exports.db = db;
