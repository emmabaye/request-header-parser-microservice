'use strict';
var express = require("express");
var useragent = require("express-useragent");
var requestIp = require("request-ip");

var app = express();

app.use(useragent.express());

 app.get('/', function(req, res){
	var clientIp = requestIp.getClientIp(req);
	var language = req.acceptsLanguages()[0];
	var source = req.useragent.source; //user-agent string
	var software = source.substring(source.indexOf('(') + 1, source.indexOf(')'));

	res.json({
		"ipaddress": clientIp,
		"language": language,
		"software": software
	});
 });

 var port = process.env.PORT||3000;

 app.listen(port, function(){
 	console.log("Node.js is listening on port " + port + "...");
 });
