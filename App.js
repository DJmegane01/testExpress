var express = require("express");
const log4js = require("log4js");

//log4js
log4js.configure({
	appenders:{
		stdout:{
			type:'stdout'
		},
		system:{
			type:'dateFile',
			filename:'./logs/system.log',
			pattern:'yyyyMMdd',
			keepFileExt: true,
			compress:true,
			daysToKeep: 5
		},
		access:{
      type:'dateFile',
			filename:'./logs/access.log',
			pattern:'yyyyMMdd',
      keepFileExt: true,
			compress:true,
			daysToKeep: 5
		}
	},
	categories:{
		default:{
			appenders:['stdout','system'],
			level:'info'
		},
		access:{
			appenders:['stdout','system'],
			level:'info'
		}
	}
});

const sysLog = log4js.getLogger('system');
const accLog = log4js.getLogger('access');
//var errLog = log4js.getLogger('error');

//express
var app = express();
var server = app.listen(3000,function(){
	sysLog.info("server started port 3000");
});

app.get("/test",function(req,res){
	res.sendFile(__dirname + '/views/test.html');
	accLog.info("access test.html");
});

app.get("/ejs-test",function(req,res,next){
	setViewEngine();
	accLog.info("access ejs");
	res.render("index",{});
});

function setViewEngine(){
	app.set('view engine','ejs');
}
