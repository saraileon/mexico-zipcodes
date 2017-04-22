'use strict';

const mongoose = require('mongoose'),
      chalk    = require('chalk'),
    	Schema 	 = mongoose.Schema;

/**
  * @module  Zipcodes
  * @description contain the details of Attribute
*/

const ZipcodeSchema = new Schema({
   zipcode 				: { type: String, required: true,  tags: { type: [String], index: true } }
  ,colony  				: { type: String, required: true,  tags: { type: [String], index: true } }
  ,state   				: { type: String, required: true,  tags: { type: [String], index: true } }
  ,municipality 	: { type: String, required: true,  tags: { type: [String], index: true } }
  ,city 					: { type: String, required: true,  tags: { type: [String], index: true } }
  ,country 				: { type: String, required: true,  tags: { type: [String], index: true } }
  ,state_code     : { type: String, required: true,  tags: { type: [String], index: true } }
  ,zone_type      : { type: String, required: true,  tags: { type: [String], index: true } }
});

if(process.env.DB === 'db_index'){
  /* Create indexes just once with the proper ENV variable */
  ZipcodeSchema.index({
     zipcode: 1
     ,colony: 1
     ,state: 1
     ,municipality: 1
     ,city: 1
     ,country: 1,state_code: 1
     ,zone_type: 1
   }, () => {

    console.log(' ');
    console.log( chalk.black.bgBlue.bold(`Created Database Indexes                             `) );

  });
}


const zipcode = mongoose.model('Zipcode', ZipcodeSchema);

/** export schema */
module.exports = {
  Zipcode : zipcode
};


