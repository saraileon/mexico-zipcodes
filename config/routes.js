'use strict';

// Load modules

var Zipcode    = require('./../controller/zipcode');

// API Server Endpoints
exports.endpoints = [
  { method: 'GET', path: '/',          			 	 config: Zipcode.index},
  { method: 'GET', path: '/zipcode/{zipcode}', config: Zipcode.getZipcode},
];