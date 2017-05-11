'use strict';

const Hapi 		= require('hapi'),
			Routes 	= require('./config/routes'),
			Db 			= require('./config/db'),
			Config 	= require('./config/config'),
			chalk 	= require('chalk');

let app = {};
app.config = Config;

let server = new Hapi.Server();

server.connection({ port: app.config.server.port, routes: { cors: true } });
server.route(Routes.endpoints);

server.start(function() {
	console.log(' ');
	console.log(chalk.black.bgGreen.bold('-----------------------------------------------------'));
	console.log(chalk.black.bgGreen.bold(`Server started http://${app.config.server.host}:${app.config.server.port}                 `));
});

