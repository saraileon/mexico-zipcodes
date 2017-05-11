'use strict';

// Load modules

var Zipcode      = require('./../controller/zipcode');
var Municipality = require('./../controller/municipality');
var State        = require('./../controller/state');
var Colony       = require('./../controller/colony');
var Zone         = require('./../controller/zone');
var App           = require('./../controller/app');

// API Server Endpoints
exports.endpoints = [
  { method: 'GET', path: '/', config: App.index },
  { method: 'GET', path: '/zipcode/{zipcode}', config: Zipcode.getZipcode },
  { method: 'GET', path: '/colony/{colony}', config: Colony.getColony },
  { method: 'GET', path: '/state/{state}', config: State.getState },
  { method: 'GET', path: '/zone/{zone}', config: Zone.getZoneType },
  { method: 'GET', path: '/municipality/{municipality}', config: Municipality.getMunicipality },
];
