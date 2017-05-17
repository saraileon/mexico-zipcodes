'use strict';

// Load modules

const App = require('./../controller/app');

// API Server Endpoints
exports.endpoints = [
  { method: 'GET', path: '/', config: App.index },
  { method: 'GET', path: '/{type}/{search}', config: App.getData },
];
